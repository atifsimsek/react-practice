import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'


const User = ({ setaActiveId }) => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {

            const { data: getUsers } = await axios("https://jsonplaceholder.typicode.com/users")

            setLoading(false)
            setUsers(getUsers)

        })()
    }, [])


    return (
        <div className='user'>
            <h2>Users</h2>
            {loading && <div>Yükleniyor...</div>}
            {users.map((user, index) => (
                <p onClick={() => { setaActiveId(user.id) }} key={index}>{user.name}</p>
            ))}
        </div>
    )
}

export default User