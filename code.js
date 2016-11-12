// V1 requirements
// it should have a place to store todos
// it should have a way to display todos
// it should have a way to add new todos
// it should have a way to change todos
// it should have a way to delete todos

// var turkey = "delicious"
//
// function makeSandwichWith(filling) {
//     Get one slice of bread;
//     add filling;
//     put a slice of bread on top;
// }
//
// makeSandwichWith(turkey);

// V2 requirements
// it should have a function to display todos
// it should have a function to add new todos
// it should have a function to change todos
// it should have a function to delete todos

// var todos = ["item 1", "item 2", "item 3"];
//
// //It should have a function to display todos.
// function displayTodos() {
//     console.log("My todos:", todos);
// }
//
// // it should have a function to add new todos
// function addTodo(todo) {
//     todos.push(todo);
//     displayTodos();
// }
//
// // it should have a function to change todos.
// function changeTodo(position, newValue) {
//     todos[position] = newValue;
//     displayTodos();
// }
//
// // It should have a function to delete todos.
// function deleteTodo(position) {
//     todos.splice(position, 1);
//     displayTodos();
// }




// V3 requirements
// it should store the todos array on an object
// var myComputer = {
//     operatingSystem: "Windows 7",
//     screenSize: "27 inches",
//     purchaseYear: 2012
// };
//
// var tanner = {
//     name: "Tanner",
//     sayName: function() {
//         console.log(this.name);
//     }
// };

// it should store the todos array on an object
// it should have a displayTodos method
// it should have an addTodo method
// it should have a changeTodo method
// it should have a deleteTodo method

// var todoList = {
//     todos: ["item 1", "item 2", "item 3"],
//     displayTodos: function() {
//         console.log("My todos:", this.todos);
//     },
//     addTodo: function(todo) {
//         this.todos.push(todo);
//         this.displayTodos();
//     },
//     changeTodo: function(position, newValue) {
//         this.todos[position] = newValue;
//         this.displayTodos();
//     },
//     deleteTodo: function(position) {
//         this.todos.splice(position, 1);
//         this.displayTodos();
//     }
// };




// V4 Requirements
// todoList.addTodo should add objects (instead of just text)
// todoList.changeTodo should change the todoText property
// todoList.toggleCompleted should change the completed property

// var todoList = {
//     todos: [],
//     displayTodos: function() {
//         console.log("My todos:", this.todos);
//     },
//     addTodo: function(todoText) {
//         this.todos.push({
//             todoText: todoText,
//             completed: false
//         });
//         this.displayTodos();
//     },
//     changeTodo: function(position, todoText) {
//         this.todos[position].todoText = todoText;
//         this.displayTodos();
//     },
//     deleteTodo: function(position) {
//         this.todos.splice(position, 1);
//         this.displayTodos();
//     },
//     toggleCompleted: function(position) {
//         var todo = this.todos[position];
//         todo.completed = !todo.completed;
//         this.displayTodos();
//     }
// };








// V5 Requirements

// i = 0                 // initialization
// say "hey" if i < 3    // condition
// increase i by 1       //final-expression (happens after each round)


for ( var i = 0; i < 3; i++) {
    console.log(i);
}














