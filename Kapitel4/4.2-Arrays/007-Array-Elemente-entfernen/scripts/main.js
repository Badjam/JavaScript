(function () {
  var todoList = [
    'Bad putzen',
    'Einkaufen',
    'Aufräumen',
    'Rasen mähen'
  ];
  var deletedTodos = todoList.splice(1, 2);
  console.log(deletedTodos);                // ["Einkaufen", "Aufräumen"]
  console.log(todoList);                    // ["Bad putzen", "Rasen mähen"]
})();