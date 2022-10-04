import React, { useState } from "react";
import "./style.css";

const INITIAL_STATE = [
  { id: 1, title: "Going shop", complated: false },
  { id: 2, title: "Pay the bills", complated: true }
];



export default function App() {
  const [liste, setListe] = useState(INITIAL_STATE);
  const [newTodo, setNewTodo] = useState("");


  const addNewTodo = (todo) => {

    setListe([...liste, { id: Date.now(), title: todo, complated: false }]);
    setNewTodo("");


  }

  const addTodos = (id) => {

    setListe(liste.map(el => el.id === id ? { ...el, complated: !el.complated } : el))
  }

  const clearComplated = () => {

    setListe(liste.filter(el => !el.complated))
  }


  return (
    <div className="App">
      <div className="container">
        <div className="form">
          <h1>To Do List</h1>
          <div className="add-area">
            <input value={newTodo} placeholder="Add to the list"
              onChange={(e) => {
                setNewTodo(e.target.value)
              }} type="text" />
            <button onClick={() => addNewTodo(newTodo)} className="btn">Add</button>
          </div>
          <div className="todos">
            <ul>
              {
                liste.map(item =>
                  <li key={item.id}
                    onClick={() => addTodos(item.id)}
                    className={item.complated ? "complated" : ""}>{item.title}</li>
                )}
            </ul>
          </div>

          <button onClick={() => clearComplated()} className="btn clear-btn">Clear Complated</button>
        </div>
      </div>
    </div>
  );
}
