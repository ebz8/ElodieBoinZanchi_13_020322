import './Form.scss'
import { FaUserCircle } from 'react-icons/fa'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { login, getUserData } from '../../features/authentication/authenticationThunks'
// import { getToken } from '../../app/services/api'
// import { useNavigate } from 'react-router-dom'


function Form() {
    const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm({
        mode: 'onTouched'
    })
    const {token} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async (data) => {
        const email = data.username
        const password = data.password
        dispatch(login({email, password}))
     }
    
     // if (token || getToken())
    // if isSubmitSuccessful
    // if (isLoading)

    useEffect(() => {
        if (token) {     
            navigate('/profile')
        }
    }, [navigate, token])

    
  return (
    <div className="form-container">
            <form onSubmit={handleSubmit(handleLogin)}>
                <FaUserCircle/>
                <h1>Sign In</h1>
                <div className="form-group username">
                    <label htmlFor="username">Username</label>
                    <input type="text" {...register('username', {
                        required: 'Please enter an username',
                        minLength: {value: 2, message: 'min 2 characters'}
                    })}/>
                    {errors.username && <span>{errors.username.message}</span>}
                </div>
                <div className="form-group password">
                    <label htmlFor="password">Password</label>
                    <input type="password"  {...register('password', {
                        required: 'Please enter a password',
                        minLength: {value: 2, message: 'min 2 characters'}
                        })}/>
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <div className="form-group remember-me">
                    <input type="checkbox" {...register('remember-me')}/>
                    <label htmlFor="remember-me" className="remember-me">Remember me</label>
                </div>
                <button type="submit" className='sign-in' disabled={isSubmitting}>Sign In</button>

            </form>
        </div>
  )
}

export default Form
