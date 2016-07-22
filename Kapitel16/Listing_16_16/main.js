'use strict';
let artists = [
  'Deep Purple',
  'Jimi Hendrix',
  'The Doors',
  'King Crimson'
];
function createIterator(array) {
  let counter = array.length-1;
// Rückgabe des Iterator-Objekts
  return {
    next: function(){
      if (counter < 0) {
        return {
          done: true
        };
      } else {
        return {
          value: array[counter--],
          done: false
        };
      }
    }
  }
};
let iterator = createIterator(artists);
let artist = iterator.next(); // erster Wert im Iterator
console.log(artist);          // Ausgabe: {value: 'King Crimson', done: false}
artist = iterator.next();     // weiter im Iterator
console.log(artist);          // Ausgabe: {value: 'The Doors', done: false}
artist = iterator.next();     // weiter im Iterator
console.log(artist);          // Ausgabe: {value: 'Jimi Hendrix', done: false}
artist = iterator.next();     // weiter im Iterator
console.log(artist);          // Ausgabe: {value: 'Deep Purple', done: false}
artist = iterator.next();     // weiter im Iterator
console.log(artist);          // Ausgabe: {done: true}