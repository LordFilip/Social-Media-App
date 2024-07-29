import { useState } from 'react'
import { storage, firestore } from '../firebase/config'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { doc, updateDoc } from 'firebase/firestore'

const useSetProfilePhoto = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const setProfilePhoto = async (file) => {
    setLoading(true)
    setError(null)

    try {
      // Retrieve user info from localStorage
      const userInfo = JSON.parse(localStorage.getItem('user-info'))

      if (!userInfo || !userInfo.uid) {
        throw new Error('User ID not found in localStorage')
      }

      const uid = userInfo.uid

      // Create a reference to the storage location
      const storageRef = ref(storage, `profilePhotos/${uid}/${file.name}`)

      // Upload the file to Firebase Storage
      const snapshot = await uploadBytes(storageRef, file)

      // Get the downloadable URL
      const downloadURL = await getDownloadURL(snapshot.ref)

      // Update the Firestore document with the new profile photo URL
      await updateDoc(doc(firestore, 'users', uid), {
        profilePicURL: downloadURL,
      })

      // Update the user info in localStorage
      userInfo.profilePicURL = downloadURL
      localStorage.setItem('user-info', JSON.stringify(userInfo))

      setLoading(false)
      return true // Photo upload and update successful
    } catch (err) {
      setError(
        err.message ||
          'An unexpected error occurred while setting the profile photo'
      )
      console.error('Error setting profile photo:', err)
      setLoading(false)
      return false // Indicate failure
    }
  }

  return { setProfilePhoto, loading, error }
}

export default useSetProfilePhoto
