'use strict';
const regExp = /[0-9][0-9].[0-9][0-9].[0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
console.log(regExp.test('49 30 1234567'));        // true 
console.log(regExp.test('49 30 12345'));          // false 
console.log(regExp.test('49 30 123456789'));      // true 
console.log(regExp.test('Hello World'));          // false
console.log(regExp.test('Hello Max Mustermann')); // false
