(function () {
  var todoList = [
    'Bad putzen',             // Element an Index 0
    'Einkaufen',              // Element an Index 1
    'Aufräumen',              // Element an Index 2
    'Rasen mähen'             // Element an Index 3
  ];
  console.log(todoList[0]);   // "Bad putzen"
  console.log(todoList[1]);   // "Einkaufen"
  console.log(todoList[2]);   // "Aufräumen"
  console.log(todoList[3]);   // Rasen mähen

  for (var i = 0; i < todoList.length; i++) {
    console.log(todoList[i]);
  }
})();