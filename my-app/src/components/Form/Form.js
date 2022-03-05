import './Form.scss'
import { FaUserCircle } from 'react-icons/fa'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


function Form() {
    const navigate = useNavigate() 
    const { register, handleSubmit, formState: {errors, isSubmitting, isSubmitSuccessful} } = useForm({
        mode: 'onTouched'
    })    
    console.log(errors)

    const handleLogin = (data) => {
        console.log(data)
        console.log(isSubmitSuccessful)
        // mettre les data dans le state global ?

        // if (isSubmitSuccessful) {
            navigate('/profile')
        // }
    }
    
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
