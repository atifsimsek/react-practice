import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodo, todoComplated } from '../store/future/todo/TodoSlice';


const TodoComponent = () => {

    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    const state = useSelector(state => state.todoReducer.todos)

    useEffect(() => {
        console.log(state)
    }, [state])

    const todoAded = () => {

        dispatch(addTodo(title));
        setTitle("");

    }





    return (
        <div>
            <h1>TodoComponent</h1>
            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
            <button onClick={() => { todoAded() }}>Add Todo</button>
            <ul>
                {state.map((todo, index) => (

                    <li key={todo.id}>
                        <span>{todo.title}</span> {" : "}
                        <span>{String(todo.complated)}</span>
                        {"  "}
                        <button onClick={() => { dispatch(todoComplated(index)) }}>Complated</button>
                        <button onClick={() => { dispatch(removeTodo(todo.id)) }}>Delete</button>


                    </li>


                ))
                }

            </ul>
        </div>
    )
}


export default TodoComponent
