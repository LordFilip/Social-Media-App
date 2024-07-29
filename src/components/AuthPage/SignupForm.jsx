import styles from './Styles/LoginForm.module.css'
import { useState, useEffect } from 'react'
import useSignUpWithEmailAndPassword from '../../hooks/useSignUp'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({ setIsLogin, setModal, error, setError }) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const {
    loading,
    signup,
    error: signupError,
  } = useSignUpWithEmailAndPassword()
  const navigate = useNavigate()

  useEffect(() => {
    if (signupError) {
      setError(getErrorMessage(signupError.code))
      setModal(true)
    }
  }, [signupError, setError, setModal])

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'The email address is already in use by another account.'
      case 'auth/invalid-email':
        return 'The email address is not valid.'
      case 'auth/operation-not-allowed':
        return 'Email/password accounts are not enabled.'
      case 'auth/weak-password':
        return 'The password is too weak.'
      default:
        return 'An unknown error occurred. Please try again.'
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputs.email || !inputs.password || !inputs.confirmPassword) {
      setError('Please fill all the inputs')
      setModal(true)
      return
    }
    if (inputs.password !== inputs.confirmPassword) {
      setError('Passwords do not match')
      setModal(true)
      return
    }
    const result = await signup(inputs)
    if (result) {
      setError('You successfully signed up')
      setModal(true)
      navigate('/initialsettings')
    } else {
      setError('An error occurred during sign up')
      setModal(true)
    }
  }

  const handleFocus = () => {
    setError(false)
    setModal(false)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.formTitle}>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Your email..."
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            onFocus={handleFocus}
            className={error ? styles.inputError : ''}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Your password..."
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            onFocus={handleFocus}
            className={error ? styles.inputError : ''}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password..."
            value={inputs.confirmPassword}
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
            onFocus={handleFocus}
            className={error ? styles.inputError : ''}
          />
        </div>
        <div className={styles.row}>
          <p>
            Already have an account?{' '}
            <span
              onClick={() => {
                setIsLogin(true)
                setModal(false)
                setError(false)
              }}
            >
              Let’s log in
            </span>
          </p>
        </div>
        <div className={styles.row}>
          <button
            className={styles.authFormButton}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
