// Add your code here
function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'post',
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
    return response.json();
  })
  .then(data => {
    const id = data.id;
    document.body.innerHTML += `<p>New user id: ${id}</p>`;
  })
  .catch(error => {
    document.body.innerHTML += `<p>Error: ${error.message}</p>`;
  });
}