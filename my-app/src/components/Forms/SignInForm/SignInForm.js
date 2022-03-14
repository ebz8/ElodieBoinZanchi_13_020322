import "./SignInForm.scss"
import { FaUserCircle } from "react-icons/fa"

import { useForm } from "react-hook-form"
import { login } from "../../../store/authentication/authenticationThunks"
import { useDispatch, useSelector } from "react-redux"

/**
 * Login Form
 * @returns {ReactElement}
 */
function SignInForm() {
  const { error } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

    /**
   * User-update Form config with react-hook-form
   * onTouched = validation strategy before user submit the form
   */
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  })

  /**
   * Login thunk dispatch with Form's data
   * @param {object} data get data from Form fields
   */
  const handleLogin = (data) => {
    const email = data.username
    const password = data.password
    dispatch(login({ email, password }))
  }

  // if (isLoading)
  // if isSubmitSuccessful
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(handleLogin)}>
        <FaUserCircle />
        <h1>Sign In</h1>
        <div className="form-group username">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            {...register("username", {
              required: "Please enter an username",
              minLength: { value: 2, message: "min 2 characters" },
            })}
          />
          {errors.username && <span>{errors.username.message}</span>}
        </div>
        <div className="form-group password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Please enter a password",
              minLength: { value: 2, message: "min 2 characters" },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className="form-group remember-me">
          <input type="checkbox" {...register("remember-me")} />
          <label htmlFor="remember-me" className="remember-me">
            Remember me
          </label>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="main-button" disabled={isSubmitting}>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignInForm
