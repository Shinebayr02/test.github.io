const todo = [
];
renderTodo();
function renderTodo(){
    
todoListhtml = "";
for (let i = 0; i < todo.length; i++) {
  
 const {name, date} = todo[i];
    const html = 
    `
    <div>${name}</div>
    <div> ${date}</div> 
    <button onclick="deleteTask(${i})" class="delete-button"">Delete</button> `;
    todoListhtml += html;
    
}
document.querySelector('.task').innerHTML = todoListhtml;
}
function deleteTask(index){
    todo.splice(index,1);
    renderTodo();
}
function addTodo() {
const input = document.querySelector('.todoinput');
const value = input.value;
const dateinput =document.querySelector('.dateinput');
const datevalue = dateinput.value;

todo.push({
  name: value,
  date: datevalue
});
input.value = '';
dateinput.value = '';

  document.querySelector('.task').innerHTML =`<p>${todo}</p>`;

renderTodo();
}
