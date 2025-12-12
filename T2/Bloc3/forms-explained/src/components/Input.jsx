/**
 *
 * @param {{id: string,
 *  type: string,
 *  register: (id:string)=>object,
 *  error?:{message?: string,
 *  placeholder: string
 *  children: React.ReactNode
 * }} props
 * @returns
 */
function Input({
  name,
  children,
  type = "text",
  register,
  error,
  placeholder = "",
}) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {children}
      </label>
      <input
        {...(register? register(name) : {})}
        type={type}
        id={name}
        className="form-control"
        placeholder={placeholder}
      />
 
     
      {error?.message ?? <p>{error?.message}</p>}
    </div>
  );
}

export default Input;
