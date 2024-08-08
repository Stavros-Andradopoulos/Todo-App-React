import { useEffect, useRef, useState } from 'react';
import './Todo.css';
import TodoItems from './TodoItems';

let count = 0;
const Todo = () => {

    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    const add = () => {
        if (inputRef.current.value.trim() !== ""){
            setTodos([...todos, {no : count++, text: inputRef.current.value, display: ""}]);
            inputRef.current.value = "";
            localStorage.setItem("todos_count", count);
        }
    };

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")) : []);
        count = localStorage.getItem("todos_count") ? localStorage.getItem("todos_count") : 0;
    }, [])

    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem("todos", JSON.stringify(todos));
        }, 100);
    }, [todos]);


    return (
        <div className='todo'>
            <div className='todo-header'>To-Do List</div>
            <div className="todo-app">
                <input ref={inputRef} type="text" placeholder='Add your task' />
                <div className="addBtn" onClick={add}>ADD</div>
            </div>
            <div className="todo-list">
                {todos.map((item, index) => {
                    return <TodoItems key={index} no={item.no} display={item.display} text={item.text} setTodos={setTodos} />
                })}
            </div>
        </div>
    )
}

export default Todo
