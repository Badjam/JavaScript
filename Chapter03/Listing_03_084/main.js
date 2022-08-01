'use strict';
const selectElement = document.getElementById('grade'); // die Auswahlliste
const options = [ // eine Liste mit Werten
  'A (90%-100%)',
  'B (80%–89%)',
  'C (70%–79%)',
  'D (60%–69%)',
  'F (0%-59%)'
];
for(let i=0; i<options.length; i++) { // Für jeden Wert in
// der Liste
  const optionElement = document.createElement('option'); // erstelle ein
// Auswahlelement,
  const optionText = document.createTextNode(options[i]); // erstelle den
// entsprechenden Text,
  optionElement.appendChild(optionText); // füge den Text an
// das Element
  selectElement.appendChild(optionElement); // und füge das Element
// an die Auswahlliste.
}