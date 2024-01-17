import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../Features/todo/todoSlice';
import AllTodo from '../AllTodo/AllTodo';
import Styles from './Add.module.css'
import Notask from '../Notask/Notask';

function Add() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const handleOnchange = (e) => {
        setInput(e.target.value);
    }
    const todos = useSelector(state => {
        return state.todos;
    })
    const addTodoHandaler = (e) => {
        e.preventDefault();
        if (input.length < 3) {
            alert("Input have less than 3 character")
        }
        else {
            dispatch(addTodo(input));
            setInput('');
        }
    }

    return (
        <>
            <div className={Styles.heading}>
                <h1>Add your daily task</h1>
            </div>
            <form onSubmit={addTodoHandaler} className={Styles.form} >
                <div className={Styles.container}>
                    <input required="required" value={input} minLength={3} onChange={handleOnchange} className={Styles.inp} />
                    <span className={Styles.content}>Add Task</span>
                </div>
                <div className={Styles.add_button} title='Add task' onClick={addTodoHandaler}>
                    <div tabIndex="0" className={Styles.plusButton}>
                        <svg className={Styles.plusIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                            <g mask="url(#mask0_21_345)">
                                <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
                            </g>
                        </svg>
                    </div>

                </div>
            </form>
            <div className={Styles.alltask} >
                {todos.length === 0 ? <Notask /> : <>
                    <h1>Your tasks</h1>
                    <AllTodo />
                </>}

            </div>
        </>
    )
}
export default Add
