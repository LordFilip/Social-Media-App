import { useState } from 'react'
import { storage, firestore } from '../firebase/config'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject,
} from 'firebase/storage'
import { doc, updateDoc } from 'firebase/firestore'

const useSetCoverPhoto = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const setCoverPhoto = async (fileOrURL) => {
    setLoading(true)
    setError(null)

    try {
      // Retrieve user info from localStorage
      const userInfo = JSON.parse(localStorage.getItem('user-info'))

      if (!userInfo || !userInfo.uid) {
        throw new Error('User ID not found in localStorage')
      }

      const uid = userInfo.uid

      // Define a reference to the user's cover photo directory
      const coverPhotosRef = ref(storage, `coverPhotos/${uid}/`)

      // List all items in the coverPhotos directory
      const listResult = await listAll(coverPhotosRef)

      // Delete all existing cover photos
      await Promise.all(
        listResult.items.map((itemRef) => deleteObject(itemRef))
      )

      let downloadURL = ''

      if (typeof fileOrURL === 'string') {
        // Assume it's a URL
        downloadURL = fileOrURL
      } else {
        // Assume it's a file
        const newCoverPhotoRef = ref(
          storage,
          `coverPhotos/${uid}/${fileOrURL.name}`
        )
        const snapshot = await uploadBytes(newCoverPhotoRef, fileOrURL)
        downloadURL = await getDownloadURL(snapshot.ref)
      }

      // Update the Firestore document with the new cover photo URL
      await updateDoc(doc(firestore, 'users', uid), {
        coverPicURL: downloadURL,
      })

      // Update the user info in localStorage
      userInfo.coverPicURL = downloadURL
      localStorage.setItem('user-info', JSON.stringify(userInfo))

      setLoading(false)
      return true // Photo upload and update successful
    } catch (err) {
      setError(
        err.message ||
          'An unexpected error occurred while setting the cover photo'
      )
      console.error('Error setting cover photo:', err)
      setLoading(false)
      return false // Indicate failure
    }
  }

  return { setCoverPhoto, loading, error }
}

export default useSetCoverPhoto
