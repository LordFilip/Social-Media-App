import Navbar from '../components/Navbar/Navbar'
import useGetUser from '../hooks/useGetUser'
import styles from './Styles/ProfilePage.module.css'
import image from '../../public/assets/no-profile-photo.jpg'
import coverPhoto from '../../public/assets/no-cover-photo.jpg'
import LeftSidebar from '../components/ProfilePage/LeftSidebar'
import RightSidebar from '../components/ProfilePage/RightSidebar'
import { useState, useEffect } from 'react'
import CoverPhotoUploader from '../components/ProfilePage/CoverPhotoUploader'
import ProfilePhotoUploader from '../components/InitialSettingsPage/ProfilePhotoUploader'
import ProfilePhotoMenu from '../components/ProfilePage/ProfilePost/ProfilePhotoMenu'
import FullscreenProfilePhoto from '../components/ProfilePage/FullscreenProfilePhoto'

const ProfilePage = () => {
  const { user, loading, error } = useGetUser()

  const [showCoverUploader, setShowCoverUploader] = useState(false)
  const [showProfileUploader, setShowProfileUploader] = useState(false)
  const [showProfilePhotoMenu, setShowProfilePhotoMenu] = useState(false)
  const [showFullscreenProfilePhoto, setShowFullscreenProfilePhoto] =
    useState(false)

  const handleShowCoverUploader = () => {
    setShowCoverUploader(true)
    setShowProfileUploader(false)
  }

  const handleShowProfileUploader = () => {
    setShowProfileUploader(true)
    setShowCoverUploader(false)
  }

  const handleCloseUploaders = () => {
    setShowCoverUploader(false)
    setShowProfileUploader(false)
  }

  const handleShowFullscreenProfilePhoto = () => {
    console.log('bidon')
    setShowFullscreenProfilePhoto(!showFullscreenProfilePhoto)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleShowFullscreenProfilePhoto()
      }
    }

    if (showFullscreenProfilePhoto) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    document.addEventListener('keydown', handleKeyDown)

    // Cleanup function to remove event listener and reset overflow
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [showFullscreenProfilePhoto])

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
      {showCoverUploader || showProfileUploader ? (
        <>
          {showCoverUploader && (
            <CoverPhotoUploader setAddCover={handleCloseUploaders} />
          )}
          {showProfileUploader && (
            <ProfilePhotoUploader
              setAddProfilePhoto={handleCloseUploaders}
              setShowProfileUploader={setShowProfileUploader}
            />
          )}
        </>
      ) : (
        <div className={styles.profilePageContainer}>
          <Navbar />
          <div className={styles.coverPhoto}>
            <img
              src={user.coverPicURL || coverPhoto}
              alt="Cover"
              className={styles.coverImage}
            />
            <button
              className={styles.coverButton}
              onClick={handleShowCoverUploader}
            >
              Edit cover photo
            </button>
            <div className={styles.profilePhoto}>
              <img
                src={user.profilePicURL || image}
                alt="Profile"
                className={styles.profileImage}
                onClick={() => setShowProfilePhotoMenu(!showProfilePhotoMenu)}
              />
              {showProfilePhotoMenu && (
                <ProfilePhotoMenu
                  handleShowProfileUploader={handleShowProfileUploader}
                  showFullScreenProfilePhoto={showFullscreenProfilePhoto}
                  setShowFullScreenProfilePhoto={setShowFullscreenProfilePhoto}
                  handleShowFullscreenProfilePhoto={
                    handleShowFullscreenProfilePhoto
                  }
                />
              )}
            </div>
          </div>
          <div className={styles.username}>
            <h1>@{user.username}</h1>
          </div>
          <div className={styles.innerContainer}>
            <LeftSidebar />
            <RightSidebar username={user.username} />
          </div>
          {showFullscreenProfilePhoto && <FullscreenProfilePhoto />}
        </div>
      )}
    </>
  )
}

export default ProfilePage
