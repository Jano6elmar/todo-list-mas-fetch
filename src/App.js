import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  const [tasks , setTask] = useState([
    {label: 'Tarea 1', done: false},
    
  ])
  const insertTask = e =>{
    if(e.keyCode === 13 && e.target.value !== ""){
      let newTask = tasks.concat({ label: e.target.value, done:false});
      setTask(newTask);
      e.target.value = "";
    }
  }
  const deleteTask = i =>{
 console.log(i)
 let newTasks = [...tasks];
 newTasks.splice(i, 1)
 setTask(newTasks)
  }
  return (
   <>
    <h1 className="display-4 text-center text-bold">todo</h1>
    <input type="text" placeholder="Ingrese Nueva Tarea"onKeyUp={insertTask}/>
    <ul class="list-group"style={{width:"50%" , margin: "0 auto" }} >
    {
      tasks.length > 0 ?
      tasks.map((item, index)=>{
        return(
          <li key={index} className="list-group-item list-group-item-action my-2 shadow rounded">{item.label}{item.done ? (""): <i className="fas fa-times" onClick={()=>deleteTask(index)}></i>}</li>
        )
      }):(
        <span> No tasks, add a task</span>
      )
      }
       
      </ul>
      </>
  );
}

export default App;
