import { useNavigate } from 'react-router-dom'
import useSetCoverPhoto from '../../hooks/useSetCoverPhoto'
import styles from './Styles/CoverPhotoUploader.module.css'
import { useState } from 'react'

const CoverPhotoUploader = ({ setAddCover }) => {
  const [file, setFile] = useState(null)
  const { setCoverPhoto, loading, error } = useSetCoverPhoto()

  const navigate = useNavigate()

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const removeCover = async () => {
    const defaultPhotoURL = '../../../public/assets/no-cover-photo.jpg'
    const success = await setCoverPhoto(defaultPhotoURL)
    if (success) {
      console.log('Cover photo set to default successfully')
      setAddCover()
      navigate('/homepage')
    } else {
      console.log('Failed to set default cover photo')
    }
  }

  const handleUpload = async () => {
    if (file) {
      const success = await setCoverPhoto(file)
      if (success) {
        console.log('Cover photo uploaded successfully')
        setAddCover()
        navigate('/homepage')
      } else {
        console.log('Failed to upload cover photo')
      }
    }
  }

  const handleClose = () => {
    setAddCover(false)
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className={styles.input}
        />
        <div className={styles.buttonsContainer}>
          <button onClick={handleClose} className={styles.button}>
            Close
          </button>
          <button onClick={removeCover} className={styles.button}>
            Remove Cover Photo
          </button>
          <button
            onClick={handleUpload}
            disabled={!file} // Disable button if loading or no file is selected
            className={styles.button}
          >
            {loading ? 'Uploading...' : 'Upload Photo'}
          </button>
        </div>

        {error && <p className={styles.error}>Error: {error}</p>}
      </div>
    </div>
  )
}

export default CoverPhotoUploader
