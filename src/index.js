document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let formNew = document.querySelector(`form`)
  formNew.addEventListener("submit", (e) => {
  e.preventDefault(); 
  // get value from input field
  let name = document.getElementById('new-task-description').value;                                                     
  handleToDo(name)
  console.log(e)
  formNew.reset()
  
  });
  
  });
  function handleToDo(todo){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  // deleted
  btn.addEventListener("click" ,deleteTask);

  btn.textContent = 'x' ;
  p.innerHTML= todo;
  // p.textContent = todo;
   p.appendChild(btn);
  console.log(p);
  document.querySelector('#list').appendChild(p);
  }
  

  function deleteTask(e){
    e.target.parentNode.remove();
  }