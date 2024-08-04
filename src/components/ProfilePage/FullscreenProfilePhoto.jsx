import styles from './Styles/FullscreenProfilePhoto.module.css'
import image from '../../../public/assets/no-profile-photo.jpg'
import useGetUser from '../../hooks/useGetUser'

const FullscreenProfilePhoto = () => {
  const { user, loading, error } = useGetUser()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!user) {
    return <div>No user data found</div>
  }

  return (
    <div className={styles.container}>
      <img
        src={user.profilePicURL || image}
        alt="Profile"
        className={styles.profileImage}
      />
    </div>
  )
}

export default FullscreenProfilePhoto
