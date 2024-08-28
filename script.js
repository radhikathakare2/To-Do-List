const add = document.querySelector("#add");
const li = document.querySelector("li");
const inputBox = document.querySelector(".input-box");
const taskList = document.querySelector("#task-list");

// const beforeStyle = window.getComputedStyle(li, '::before');
// const beforeContent = beforeStyle.getPropertyValue('background-image');

add.addEventListener("click", () => {
  if (inputBox.value == ''){
    alert("Please enter a task.");
  }
  else{
    const task = document.createElement('li')
    task.textContent = inputBox.value;
    taskList.appendChild(task)
    let remove = document.createElement('span')
    remove.textContent = "\u00d7"
    task.appendChild(remove)
    remove.style.right = '0px';    
  }
  inputBox.value = '';
  saveData();
})

taskList.addEventListener('click', (e)=>{
  if(e.target.tagName === 'LI'){
      e.target.classList.add("checked");
      saveData();
  }
  else if(e.target.tagName === 'SPAN'){
      e.target.parentElement.remove();
      saveData();
  }
})

function saveData(){
  localStorage.setItem("data",taskList.innerHTML);
}

function showTask(){
  taskList.innerHTML = localStorage.getItem("data");
}

showTask();