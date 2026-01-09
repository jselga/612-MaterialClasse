// url error
const url = 'https://jsonplaceholder.typicode.com/todos/a';
// url ok
// const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
      .then(response => {
            // return response.json();
            if (response.ok) {
                  return response.text();
            }
            return Promise.reject(response.status);


      })
      .then(data => console.log(data))
      .catch(message => console.log({ message }));
