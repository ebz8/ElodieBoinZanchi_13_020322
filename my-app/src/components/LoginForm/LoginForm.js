import './LoginForm.scss'

import { FaUserCircle } from 'react-icons/fa'
import { toast } from 'react-toastify'

import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../../features/authentication'

const LoginForm = ({path, name}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const { email, password } = formData

    // const navigate = useNavigate()
    // const dispatch = useDispatch()

    // const { user, isLoading, isError, isSucces, message } = useSelector((state) => state.auth)

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
        console.log(e.target.value)
        // setFormData((prevState) => ({
        //     ...prevState,
        //     [e.target.name]: e.target.value,
        // }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        // const userData = {
        //     email,
        //     password
        // }
        // dispatch(login(userData))
    }

    // if (isLoading) {
    //     console.log('loading')
    // }
    return (
        <div className="form-container">
            <form onSubmit={onSubmit}>
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
                <div className="form-group sign-in">
                    {/* <button type="submit"> */}
                    <Link to={`/profile`}>Sign In</Link>
                    {/* </button> */}
                </div>
            </form>
        </div>
    )
}

export default LoginForm
