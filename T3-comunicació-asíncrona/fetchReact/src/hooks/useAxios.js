import { useEffect, useState,useRef } from "react";
import axios from "axios";
export function useAxios(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



  const controllerRef = useRef(null);

  const handleCancelRequest = () => {
    controllerRef.current?.abort();
    setError("Request cancelled");
  };
    useEffect(() => {

        controllerRef.current = new AbortController();
        setLoading(true);
        setError(null);
        axios.get(url, { signal: controllerRef.current.signal })
            .then(res => setData(res.data))
            .catch(err => {
                if (err.name !== "CanceledError") setError(err.message);
            }).finally(() => setLoading(false))
            ;

        return () => controllerRef.current.abort();
    }, [url]);
  
    return { data, loading, error, handleCancelRequest }
}