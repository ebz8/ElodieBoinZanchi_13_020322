import "./ProfileHeader.scss"

import { useSelector } from "react-redux"
import UpdateUserForm from "../Forms/UpdateUserForm/UpdateUserForm"

/**
 * Profile Header with User-update Form appearing at toggle
 * @param {string} firstName fetched data from Profile Page
 * @param {string} lastName fetched data from Profile Page
 * @returns {React Element}
 */
const ProfileHeader = () => {
  const { firstName, lastName } = useSelector((state) => state.user)

  return (
    <div className="profile-header">
      <h1>
        Welcome back <br />
        {firstName + " " + lastName}!
      </h1>
      <UpdateUserForm />
    </div>
  )
}

export default ProfileHeader
