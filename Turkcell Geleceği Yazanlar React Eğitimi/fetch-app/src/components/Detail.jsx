import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'




const Detail = ({ activeId }) => {

  const [activeUser, setActiveUser] = useState();

  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)

    axios(`https://jsonplaceholder.typicode.com/users/${activeId}`)
      .then(res => setActiveUser(res.data))
      .finally(() => { setLoading(false) })



  }, [activeId])



  return (
    <div className='detail'>
      <h2>Detail</h2>
      {loading && <div>Yükleniyor...</div>}

      <pre>{JSON.stringify(activeUser, null, 3)}</pre>

    </div>
  )
}

export default Detail