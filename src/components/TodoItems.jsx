import React from 'react'
import './TodoItems.css';
import xIcon from '../assets/cross.png';
import not_tick from '../assets/not_tick.png';
import tick from '../assets/tick.png';

const TodoItems = ({no, text, display, setTodos}) => {

    const deleteItem = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter((todo) => todo.no !== no);
        setTodos(data);
    }

    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        for (let i = 0; i < data.length; i++){
            if (data[i].no === no){
                data[i].display = data[i].display === "" ? "line-through" : ""; 
                break;
            }
        }
        setTodos(data);
    }

    return (
        <div className='todo-items'>
            <div className='todo-items-container' onClick={() => {toggle(no)}}>
                <img src={display === "" ? not_tick : tick} alt="" />
                <div className={`todo-items-text ${display}`}>{text}</div>
            </div>
            <img src={xIcon} alt="" className='cross-icon' onClick={() => {deleteItem(no)}} />
        </div>
    )
}

export default TodoItems


