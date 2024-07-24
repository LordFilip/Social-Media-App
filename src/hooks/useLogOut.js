import { useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/config'

const useLogOut = () => {
  const [signOut, loading, error] = useSignOut(auth)

  const handleLogOut = async () => {
    try {
      await signOut()
      localStorage.removeItem('user-info')
      console.log('logging out succesfull')
    } catch (error) {
      console.log('logging out faild')
    }
  }

  return { handleLogOut, loading, error }
}

export default useLogOut
