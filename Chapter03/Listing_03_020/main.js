'use strict';
const message1 = 'Ihr Name lautet "John Doe"';
const message2 = "Ihr Name lautet 'John Doe'";
const message3 = 'Ihr Name lautet \'John Doe\'';
const message4 = "Ihr Name lautet \"John Doe\"";
console.log(message1); // Ausgabe: Ihr Name lautet "John Doe"
console.log(message2); // Ausgabe: Ihr Name lautet 'John Doe'
console.log(message3); // Ausgabe: Ihr Name lautet 'John Doe'
console.log(message4); // Ausgabe: Ihr Name lautet "John Doe"