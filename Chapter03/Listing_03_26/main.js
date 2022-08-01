'use strict';
const name = 'John Doe';
const age = 44;
function getName() {
  return name;
}
const message = `Mein Name ist ${getName()}, ich bin das Doppelte von ${age/2} Jahren alt`;
console.log(message);
// "Mein Name ist John Doe, ich bin das Doppelte von 22 Jahren alt."