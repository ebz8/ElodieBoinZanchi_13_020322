import "./ProfileHeader.scss"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { updateUserData } from '../../features/userData/userDataThunks'
import { useDispatch } from "react-redux"

const ProfileHeader = ({ firstName, lastName }) => {
  const dispatch = useDispatch()

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
  const [isUpdating, setIsUpdating] = useState(false)

  const toggleForm = () => {
    setIsUpdating(!isUpdating)
    // reset form fields with actual defaultValues
    reset()
  }

  const handleUpdateUser = (data) => {
    const firstName = data.firstName
    const lastName = data.lastName
    console.log( `${firstName}, ${lastName}`)
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
                  // value: firstName,
                  required: "Please enter a first name",
                  minLength: { value: 2, message: "min 2 characters" },
                })}
              />
              {errors.firstName && <span>{errors.firstName.message}</span>}
            </div>
            <div className="form-group lastname">
              <input
                type="lastname"
                {...register("lastName", {
                  // value: lastName,
                  required: "Please enter a last name",
                  minLength: { value: 2, message: "min 2 characters" },
                })}
              />
              {errors.lastName && <span>{errors.lastName.message}</span>}
            </div>
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
