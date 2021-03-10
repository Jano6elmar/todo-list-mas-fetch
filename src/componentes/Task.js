import React from 'react'

const Task = ({task, index, deleteTask}) => {

    return (
        <li key={index} className="list-group-item myLi">{task} <i className="fas fa-trash" 
        onClick={() => deleteTask(index)}></i></li>
    )
}
export default Task;