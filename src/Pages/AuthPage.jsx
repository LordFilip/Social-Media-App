import styles from './Styles/AuthPage.module.css'
import LoginForm from '../components/AuthPage/LoginForm'
import SignupForm from '../components/AuthPage/SignupForm'
import image from '../../public/assets/auth-image.jpg'

import { useState } from 'react'
import ErrorModal from '../components/ErrorModal/ErrorModal'

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [modal, setModal] = useState(false)
  const [error, setError] = useState('')

  return (
    <div className={styles.container}>
      <div className={(styles.form, styles.box)}>
        {isLogin ? (
          <LoginForm
            setIsLogin={setIsLogin}
            setModal={setModal}
            error={error}
            setError={setError}
          />
        ) : (
          <SignupForm
            setIsLogin={setIsLogin}
            setModal={setModal}
            error={error}
            setError={setError}
          />
        )}
      </div>
      <div className={(styles.form, styles.box)}>
        <img src={image} alt="auth image" />
      </div>
      <ErrorModal modal={modal} setModal={setModal} isError={error} />
    </div>
  )
}

export default AuthPage
