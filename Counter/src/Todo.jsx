import React, {useState} from "react";

function Todo(){
  const [todo,setTodo] = useState([])
  const [newTask, setNewTask] = useState('')

  function handleInputChange(e){
    setNewTask(e.target.value)
  }
  function addTask(){
    if(newTask.trim() !== ''){
     setTodo([...todo,newTask])
     setNewTask('');
     }
  }
  function deleteTask(index){
    const updatedTasks = todo.filter((_,i) => i !== index);
    setTodo(updatedTasks)
  }
  function moveUp(index){
   if(index > 0){
    const updatedTasks = [...todo];
    [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
    setTodo(updatedTasks)
   }
  }
  function moveDown(index){
   if(index < todo.length-1){
    const updatedTasks = [...todo];
    [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]]
    setTodo(updatedTasks)
   }
  }
  return(
    <div className="to-do-list">
        <h2>To-Do-List</h2>
        <div className="inputContainer">
            <input type="text" className = "input" value={newTask} placeholder="Enter tasks..." onChange={handleInputChange}/>
            <button className="inputBtn" onClick={addTask}>Add Task</button>
        </div>
        <ul>
            {todo.map((task,index) => 
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete" onClick={()=>deleteTask(index)}>Delete</button>
                <button className="up" onClick={()=>moveUp(index)}>Up</button>
                <button className="down" onClick={() =>moveDown(index)}>Down</button>
            </li>)
            }
        </ul>
    </div>
  )
}
export default Todo