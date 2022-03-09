import "./ProfileHeader.scss"
import { useForm } from "react-hook-form"

const ProfileHeader = ({ firstName, lastName }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  })

  const toggleForm = () => {
    console.log("afficher / cacherle formulaire")
  }

  const handleUpdateUser = (data) => {
    const email = data.username
    const password = data.password
    // dispatch(login({ email, password }))
  }

  return (
    <div className="profile-header">
    {/* si toggle inactif */}
      <h1>Welcome back <br />{firstName + ' ' + lastName}!</h1>
      <button className="main-button">Edit Name</button>
    {/* si toggle actif : <h1>Welcome back</h1> + formulaire + btn*/}
    </div>
    // <div className="profile-header">
    //   <form onSubmit={handleSubmit(handleUpdateUser)}>
    //     <h1>Welcome back</h1>
    //     <div className="inputs-group">
    //       <div className="form-group firstname">
    //         <input
    //           type="text"
    //           {...register("firstName", {
    //             value: firstName,
    //             required: "Please enter a firstname",
    //             minLength: { value: 2, message: "min 2 characters" },
    //           })}
    //         />
    //         {errors.firstName && <span>{errors.firstName.message}</span>}
    //       </div>
    //       <div className="form-group lastname">
    //         <input
    //           type="lastname"
    //           {...register("lastname", {
    //             value: lastName,
    //             required: "Please enter a lastName",
    //             minLength: { value: 2, message: "min 2 characters" },
    //           })}
    //         />
    //         {errors.lastName && <span>{errors.lastName.message}</span>}
    //       </div>
    //     </div>
    //     <div className="buttons-group">
    //       <button type="submit" disabled={isSubmitting}>
    //         Save
    //       </button>
    //       <button onClick={toggleForm}>Cancel</button>
    //     </div>
    //   </form>
    // </div>
  )
}

export default ProfileHeader
