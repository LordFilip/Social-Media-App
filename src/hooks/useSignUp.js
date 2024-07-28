import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../firebase/config'
import { setDoc, doc } from 'firebase/firestore'

const useSignUpWithEmailAndPassword = () => {
  // Destructure the returned values from the hook
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)

  const signup = async (inputs) => {
    // Check for missing inputs
    if (!inputs.email || !inputs.password) {
      console.log('Please fill all the fields')
      return false
    }

    try {
      // Attempt to create a new user
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      )

      if (newUser) {
        // Create user document in Firestore
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: '',
          bio: '',
          profilePicURL: '',
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        }
        await setDoc(doc(firestore, 'users', newUser.user.uid), userDoc)
        localStorage.setItem('user-info', JSON.stringify(userDoc))
        return true // Signup successful
      } else {
        return false // Signup failed without an error
      }
    } catch (error) {
      console.log('Error signing up:', error.message)
      return false // Signup failed with an error
    }
  }

  return { loading, error, signup }
}

export default useSignUpWithEmailAndPassword
