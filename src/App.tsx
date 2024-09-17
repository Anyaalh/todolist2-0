import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

function App() {

    const task_1: Array<TaskType> = [
        {id: 1, isDone: true, title: "HTML&CSS"},
        {id: 2, isDone: true, title: "JS"},
        {id: 3, isDone: false, title: "React"}
    ]

    const task_2: Array<TaskType> = [
        {id: 4, isDone: true, title: "milk"},
        {id: 5, isDone: false, title: "bread"},
        {id: 6, isDone: false, title: "water"},
        {id: 7, isDone: false, title: "cola"}
    ]

    return (
        <div className="App">
         <Todolist title="What to learn" tasks={task_1}/>
         <Todolist title="What to buy" tasks={task_2}/>
        </div>
    );
}

export default App;
