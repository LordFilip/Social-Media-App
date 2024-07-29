import useSetProfilePhoto from '../../hooks/useSetProfilePhoto'
import styles from './ProfilePhotoUploader.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProfilePhotoUploader = () => {
  const [file, setFile] = useState(null)
  const { setProfilePhoto, loading, error } = useSetProfilePhoto()
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = async () => {
    if (file) {
      const success = await setProfilePhoto(file)
      if (success) {
        console.log('Profile photo uploaded successfully')
        navigate('/homepage')
      } else {
        console.log('Failed to upload profile photo')
      }
    }
  }

  return (
    <div className={styles.container}>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className={styles.input}
      />
      <button
        onClick={handleUpload}
        disabled={loading}
        className={styles.button}
      >
        {loading ? 'Uploading...' : 'Upload Photo'}
      </button>
      {error && <p className={styles.error}>Error: {error}</p>}
    </div>
  )
}

export default ProfilePhotoUploader
