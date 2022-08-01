'use strict';
function createUser(username, email, password = 'StAnDaRdPaSsWoRt') {
  const user = {
    username: username,
    email: email,
    password: password
  }
  return user;
}
const max = createUser('John Doe', 'max.mustermann@example.com', 'secret');
console.log(max.username);    // John Doe
console.log(max.email);       // max.mustermann@example.com
console.log(max.password);    // secret
const moritz = createUser('James Doe', 'moritz.mustermann@example.com');
console.log(moritz.username); // James Doe
console.log(moritz.email);    // moritz.mustermann@example.com
console.log(moritz.password); // StAnDaRdPaSsWoRt