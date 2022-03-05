import './LoginForm.scss'
import { FaUserCircle } from 'react-icons/fa'

// import { toast } from 'react-toastify'

import { useNavigate, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { login, reset } from '../../features/authentication'
import { login } from '../../features/authentication'
import history from '../../app/utils/history'

const LoginForm = ({path, name}) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })
    const { email, password } = formData
    // const { token, user, isLoading, isError, isSucces, message } = useSelector((state) => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // if(token || getToken()){
    //     history.push('/profile');
    // }


    // useEffect(() => {
    //     if (isError) {
    //         toast.error(message)
    //     }
    //     if (isSucces || user) {
    //         navigate('/profile')
    //     }
        
    //     dispatch(reset())
    // }, [user, isError, isSucces, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
        console.log(formData)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('submit')
        navigate('/profile')
        // history.push('/profile')
        // const userData = {
        //     email,
        //     password
        // }
        // dispatch(login(userData))
    }

    // if (isLoading)
    return (
        <div className="form-container">
            <form onSubmit={handleLogin}>
                <FaUserCircle/>
                <h1>Sign In</h1>
                <div className="form-group username">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" onChange={onChange}/>
                </div>
                <div className="form-group password">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={onChange}/>
                </div>
                <div className="form-group remember-me">
                    <input type="checkbox" name="remember-me" onChange={onChange}/>
                    <label htmlFor="remember-me" className="remember-me">Remember me</label>
                </div>
                <button type="submit" className='sign-in'>Sign In</button>
            </form>
        </div>
    )
}

export default LoginForm
