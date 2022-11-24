/* eslint-disable array-callback-return */
import './App.css';
import { useEffect, useState } from "react"

function App() {



  const [peopleList, setPeopleList] = useState([
    {
      id: 1,
      name: "İbrahim",
      surname: "Birinci",
      vote: 1
    },
    {
      id: 2,
      name: "Atıf",
      surname: "Birinci",
      vote: 2
    },
    {
      id: 3,
      name: "Atıf",
      surname: "Şimşek",
      vote: 3
    }
  ])

  const sortedUsers = peopleList.sort((a, b) => b.vote - a.vote)



  const [list, addList] = useState([])
  const [todo, setTodo] = useState("");

  console.log()

  useEffect(() => {


  }, [list])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (todo) {

      addList([todo, ...list])
      setTodo("");

    }

  }

  const deleteTodo = (index) => {

    addList(list => list.filter((todo, i) => i !== index))

  }



  const deneme = user => {

    setPeopleList(
      peopleList.map(people => user.id === people.id ? { ...people, vote: people.vote + 1 } : people)

    )



  }


  return (
    <div className="App">

      <form onSubmit={handleSubmit} >
        <input value={todo} onChange={(e) => { setTodo(e.target.value) }} type="text" />
        <button disabled={!todo} type='submit' >Add Todo</button>

      </form>

      <ul className="list">
        {list.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={(index) => { deleteTodo(index) }}>Sil</button>
          </li>
        ))}
      </ul>


      <div className='list'>
        <ul>
          {sortedUsers.map(user => (
            <li key={user.id}>
              {user.name + "" + user.surname}

              <button onClick={() => { deneme(user) }} > Vote({user.vote})</button>
            </li>
          ))}
        </ul>
      </div>



    </div >
  );
}

export default App;
