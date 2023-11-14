import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import { types } from "../types/types"
import { useForm } from "../hooks/useForm"
import { fetchWithOutAuth } from "../api/fetchWithOutAuth"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

    const navigate = useNavigate()

    const { login } = useContext(AuthContext)
    const { formValues, onChange, reset } = useForm({
        username: 'alesan',
        password: '123456'
    })
    
    const { username, password } = formValues;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await fetchWithOutAuth('api/auth/signin', 'POST', formValues);
        if(resp.user){
            login(resp);
            console.log(resp);
            navigate('/home')
          } else {
            alert('Algo salió mal')
        }

        
    }


  return (
    <div className='container pt-5'>
      <div className="row">
        <div className="col-md-5 mx-auto">
          <h1>Login</h1>
          <form
            onSubmit={handleSubmit}
            action="">
            <input
              type="text"
              className='form-control mb-3'
              placeholder='Ingrese usuario'
              onChange={onChange}
              value={username}
              name="username"
            />

            <input
              type="password"
              className='form-control mb-3'
              placeholder='Ingrese contraseña'
              onChange={onChange}
              value={password}
              name="password"
            />

            <button 
              type="submit" 
              className='btn btn-primary'>
                Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
