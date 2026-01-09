const url = 'https://jsonplaceholder.typicode.com/todos/';
fetch(url, {
      method: 'POST', // PUT, PATCH, DELETE, GET
      body: JSON.stringify({ title: 'Hello World' }),
      headers: {
            'Content-Type': 'application/json',
            Authorization: 'api key',
      },
      cache: 'no-cache', // default, reload, force-cache,  only-if-cached

})
      .then(response => {
            // return response.json();
            if (response.ok) {
                  return response.text();
            }
            return Promise.reject(response.status);


      })
      .then(data => console.log(data))
      .catch(message => console.log({ message }));
