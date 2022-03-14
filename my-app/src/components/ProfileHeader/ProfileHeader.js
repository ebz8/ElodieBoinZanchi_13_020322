import "./ProfileHeader.scss"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { updateUserData } from '../../store/userData/userDataThunks'

/**
 * Profile Header with User-update Form appearing at toggle
 * @param {string} firstName fetched data from Profile Page
 * @param {string} lastName fetched data from Profile Page
 * @returns {React Element}
 */
const ProfileHeader = ({ firstName, lastName }) => {
  const [isUpdating, setIsUpdating] = useState(false)
  const dispatch = useDispatch()

  /**
   * User-update Form config with react-hook-form
   * onTouched = validation strategy before user submit the form
   * defaultValues = to have pre-filled fields with data from global state
   */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      firstName: firstName,
      lastName: lastName,
    }
  })
  
  /**
   * Toggle to show or hide user-update Form
   * including reset function to actualise inputs' defaultValues
   */
  const toggleForm = () => {
    setIsUpdating(!isUpdating)
    reset({
      firstName: firstName,
      lastName: lastName,
    })
  }
  /**
   * Update-user thunk
   * @param {object} data get data from Form fields
   */
  const handleUpdateUser = (data) => {
    const firstName = data.firstName
    const lastName = data.lastName
    dispatch(updateUserData({ firstName, lastName }))
    setIsUpdating(!isUpdating)
  }

  return (
    <div className="profile-header">
      {!isUpdating ? (
        <>
          <h1>
            Welcome back <br />
            {firstName + " " + lastName}!
          </h1>
          <button className="main-button" onClick={toggleForm}>
            Edit Name
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit(handleUpdateUser)}>
          <h1>Welcome back</h1>
          <div className="inputs-group">
            <div className="form-group firstname">
              <input
                type="text"
                {...register("firstName", {
                  required: "Please enter a first name",
                  minLength: { value: 2, message: "min 2 characters" },
                })}
              />
            </div>
            <div className="form-group lastname">
              <input
                type="lastname"
                {...register("lastName", {
                  required: "Please enter a last name",
                  minLength: { value: 2, message: "min 2 characters" },
                })}
              />
            </div>
          </div>
          <div className="errors-group">
            {errors.firstName && <span className="error">{errors.firstName.message}</span>}
            {errors.lastName && <span className="error">{errors.lastName.message}</span>}
          </div>
          <div className="buttons-group">
            <button className="main-button" type="submit">Save</button>
            <button className="main-button" onClick={toggleForm}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  )
}

export default ProfileHeader
