var list = document.querySelector('#app ul ');
var input = document.querySelector('#app input ');
var button = document.querySelector('#app button ');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    list.innerHTML = '';

    for(todo of todos){

        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');var pos = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        linkElement.setAttribute('href', '#');
        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement)
        list.appendChild(todoElement);

    }
}

renderTodos();

function addTodo() {
    var todoText = input.value;

    todos.push(todoText);
    input.value = '';
    renderTodos();
    saveToStorage();
}



button.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}