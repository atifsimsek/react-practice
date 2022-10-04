import { useAuth } from "../../context/AuthContext"
import { useNavigate, useLocation } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const { setUser } = useAuth()


  const loginHandle = () => {
    setUser({
      id: 1,
      username: "admin"
    })


    navigate(location?.state?.return_url || "/")
  }

  return (
    <div>
      Login Page

      <button onClick={() => { loginHandle() }}>Login</button>
    </div>

  )
}

export default Login