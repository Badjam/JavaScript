'use strict';
const regExp = /............./;
console.log(regExp.test('Hallo Welt'));           // false
console.log(regExp.test('John Doe'));       // true
console.log(regExp.test('Hallo John Doe')); // true