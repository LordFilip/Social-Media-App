import { useState, useEffect } from 'react'
import { firestore } from '../firebase/config'
import { collection, query, where, getDocs } from 'firebase/firestore'

const useCheckUsername = (username) => {
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const checkUsername = async () => {
      if (!username) return

      setLoading(true)
      setError(null)

      try {
        const q = query(
          collection(firestore, 'users'),
          where('username', '==', username)
        )

        const querySnapshot = await getDocs(q)
        setIsUsernameAvailable(querySnapshot.empty)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    checkUsername()
  }, [username])

  return { isUsernameAvailable, loading, error }
}

export default useCheckUsername
