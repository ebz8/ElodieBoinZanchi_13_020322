import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { updateUserData } from "../../../store/userData/userDataThunks"

function UpdateUserForm() {
  const { userDataError, firstName, lastName } = useSelector(
    (state) => state.user
  )
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
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      firstName: firstName,
      lastName: lastName,
    },
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
    }, {
      keepDirty: true,
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
    !userDataError && setIsUpdating(!isUpdating)
  }

  return (
    <>
      {!isUpdating ? (
        <button className="main-button" onClick={toggleForm}>
          Edit Name
        </button>
      ) : (
        <form onSubmit={handleSubmit(handleUpdateUser)}>
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
            {errors.firstName && (
              <span className="error">{errors.firstName.message}</span>
            )}
            {errors.lastName && (
              <span className="error">{errors.lastName.message}</span>
            )}
            {userDataError && <span className="error">{userDataError}</span>}
          </div>
          <div className="buttons-group">
            <button
              className="main-button"
              type="submit"
              disabled={isSubmitting}
            >
              Save
            </button>
            <button className="main-button" onClick={toggleForm}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </>
  )
}

export default UpdateUserForm
