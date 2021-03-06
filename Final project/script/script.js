var modal = document.getElementById('myModal');
var bth = document.getElementById('myBth');
var span = document.getElementsByClassName('close')[0];

bth.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function(){
    modal.style.display = 'none';
}    

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = 'none';
    }
}







// todo    
let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let todo = document.querySelector('.todo');

let todoList = [];

if (localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessage();
}

addButton.addEventListener('click',function () {
    if (addMessage.value == '') return;
    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    }
    
    todoList.push(newTodo); 
    displayMessage();
    localStorage.setItem('todo',JSON.stringify(todoList));
    addMessage.value = '';
});

function displayMessage() {
    let displayMessage = '';
    todoList.forEach(function (item, i) {
        displayMessage += `
        <li>
            <input type = 'checkbox' id = 'item_${i}' ${item.checked ? 'checked' : ''}>
            <label  for='item_${i}'>${item.todo}</label>
        </li>
        `;
        todo.innerHTML = displayMessage;
    });
}

todo.addEventListener('change', function (event) {
    let idInput = event.target.getAttribute('id');
    let forLabel = todo.querySelector('[for='+ idInput +']');
    let valueLabel = forLabel.innerHTML;

    todoList.forEach(function (item) {
        if (item.todo === valueLabel){
            item.checked =! item.checked;
            localStorage.setItem('todo',JSON.stringify(todoList));
        }
    })
})