const dataToCreateUser = {
  id: 11,
  name: 'John Doe',
  username: 'johndoe',
  email: 'johndoe@gmail.com'
}

const dataToUpdateUser = {
  id: 2,
  name: 'Tom Smith',
  userName: 'tomsmith',
  email: 'tomsmith@gmail.com'
}


const http = new EasyHTTP;

// Get Users
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err))

// Get Single User
http.get('https://jsonplaceholder.typicode.com/users/1')
  .then(data => console.log(data))
  .catch(err => console.log(err))

// Create User
http.post('https://jsonplaceholder.typicode.com/users', dataToCreateUser)
  .then(data => console.log(data))
  .catch(err => console.log(err))

// Update User
http.put('https://jsonplaceholder.typicode.com/users/2', dataToUpdateUser)
  .then(data => console.log(data))
  .catch(err => console.log(err))
 
// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/5')
  .then(data => console.log(data))
  .catch(err => console.log(err))
