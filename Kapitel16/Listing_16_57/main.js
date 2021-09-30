'use strict';
const symbol1 = Symbol.for('exampleKey');     // Symbol in Registry erzeugen
const symbol2 = Symbol('exampleDescription'); // Symbol außerhalb von Registry erzeugen
console.log(Symbol.keyFor(symbol1));        // exampleKey, weil vorhanden in Registry
console.log(Symbol.keyFor(symbol2));        // undefined, weil nicht vorhanden in Registry
const symbol3 = Symbol.for('exampleKey');     // vorhandenes Symbol aus Registry nutzen
const symbol4 = Symbol.for('exampleKey');     // vorhandenes Symbol aus Registry nutzen
console.log(symbol3 === symbol4);           // true, weil gleiches Symbol