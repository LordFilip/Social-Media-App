import styles from './ProfilePhotoMenu.module.css'
import { TbPhotoSearch } from 'react-icons/tb'
import { MdOutlinePhotoLibrary } from 'react-icons/md'

const ProfilePhotoMenu = ({
  handleShowProfileUploader,
  handleShowFullscreenProfilePhoto,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.row} onClick={handleShowFullscreenProfilePhoto}>
        <TbPhotoSearch className={styles.icon} />

        <h5>Show photo in fullscreen</h5>
      </div>
      <div className={styles.row} onClick={handleShowProfileUploader}>
        <MdOutlinePhotoLibrary className={styles.icon} />

        <h5>Upload photo from device</h5>
      </div>
    </div>
  )
}

export default ProfilePhotoMenu
