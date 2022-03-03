import './LoginForm.scss'

import { Link } from 'react-router-dom'


const LoginForm = ({path, name}) => {
    return (
        <div className="form-container">
            <form>
                <i className="fa fa-user-circle" />
                <h1>Sign In</h1>
                <div className="form-group username">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" />
                </div>
                <div className="form-group password">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <div className="form-group remember-me">
                    <input type="checkbox" name="remember-me" />
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
