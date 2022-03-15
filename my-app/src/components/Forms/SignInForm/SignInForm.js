import "./SignInForm.scss"
import { FaUserCircle } from "react-icons/fa"

import { useForm } from "react-hook-form"
import { login } from "../../../store/authentication/authenticationThunks"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

/**
 * Login Form
 * @returns {ReactElement}
 */
function SignInForm() {
  const { authError } = useSelector((state) => state.auth)
  const { fetchedData } = useSelector((state) => state.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

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
    defaultValues: {
      rememberme : true,
    },
  })

  /**
   * Login thunk dispatch with Form's data
   * @param {object} data get data from Form fields
   */
  const handleLogin = (data) => {
    const remember = data.rememberme
    const email = data.username
    const password = data.password
    dispatch(login({ email, password, remember }))
  }

  useEffect(() => {
    fetchedData && navigate("/profile")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedData])

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
        <div className="form-group rememberme">
          <input type="checkbox" {...register("rememberme")} />
          <label htmlFor="remember-me" className="rememberme">
            Remember me
          </label>
        </div>
        {authError && <p className="error-message">{authError}</p>}
        <button type="submit" className="main-button" disabled={isSubmitting}>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignInForm
