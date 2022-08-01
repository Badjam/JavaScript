'use strict';
function createUser(username, email, password) {
  const user = {
    username: username,
    email: email,
    password: password
  }
  return user;
}
const max = createUser('John Doe', 'max.mustermann@example.com', 'secret');
console.log(max.username);  // John Doe
console.log(max.email);     // max.mustermann@example.com
console.log(max.password);  // secret