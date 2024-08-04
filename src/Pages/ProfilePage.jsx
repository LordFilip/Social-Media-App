import Navbar from '../components/Navbar/Navbar'
import useGetUser from '../hooks/useGetUser'
import styles from './Styles/ProfilePage.module.css'
import image from '../../public/assets/no-profile-photo.jpg' // Placeholder for profile photo
import coverPhoto from '../../public/assets/no-cover-photo.jpg' // Placeholder for cover photo
import LeftSidebar from '../components/ProfilePage/LeftSidebar'
import RightSidebar from '../components/ProfilePage/RightSidebar'
import { useState } from 'react'
import CoverPhotoUploader from '../components/ProfilePage/CoverPhotoUploader'

const ProfilePage = () => {
  const { user, loading, error } = useGetUser()

  const [addCover, setAddCover] = useState(false)
  const [key, setKey] = useState(0) // State to trigger re-render

  const handleAddCover = () => {
    setAddCover(!addCover)
  }

  const handleCoverPhotoUpdate = () => {
    setAddCover(false)
    setKey(key + 1) // Update the key to trigger a re-render
  }

  if (loading) {
    return <div className={styles.loading}>Loading...</div>
  }

  if (error) {
    return <div className={styles.error}>{error}</div>
  }

  if (!user) {
    return
  }

  return (
    <>
      {!addCover ? (
        <div className={styles.profilePageContainer} key={key}>
          <Navbar />
          <div className={styles.coverPhoto}>
            <img
              src={user.coverPicURL || coverPhoto}
              alt="Cover"
              className={styles.coverImage}
            />
            <button className={styles.coverButton} onClick={handleAddCover}>
              Edit cover photo
            </button>
            <div className={styles.profilePhoto}>
              <img
                src={user.profilePicURL || image}
                alt="Profile"
                className={styles.profileImage}
              />
            </div>
          </div>
          <div className={styles.username}>
            <h1>@{user.username}</h1>
          </div>
          <div className={styles.innerContainer}>
            <LeftSidebar />
            <RightSidebar username={user.username} />
          </div>
        </div>
      ) : (
        <CoverPhotoUploader setAddCover={handleCoverPhotoUpdate} />
      )}
    </>
  )
}

export default ProfilePage
