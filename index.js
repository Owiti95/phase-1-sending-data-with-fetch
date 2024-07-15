// Add your code here
function submitData(name, email) {
    // Constructing the fetch POST request
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(response => {
      // Handling successful response
      return response.json();
    })
    .then(data => {
      // Accessing the returned data and appending id to DOM
      const id = data.id;
      document.body.innerHTML += `<p>New user id: ${id}</p>`;
    })
    .catch(error => {
      // Handling errors and appending error message to DOM
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
  }