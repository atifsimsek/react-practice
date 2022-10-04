import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Profile = () => {

  const { user,setUser } = useAuth()

  const logoutHandle = () => {

    setUser(false)

  }


  return (
    <div>
      Profile Page <br />
      {!user && <Link to="/auth/login">Login</Link>}
      {user && <button onClick={() => { logoutHandle() }}>Logout</button>}

    </div>
  )
}

export default Profile