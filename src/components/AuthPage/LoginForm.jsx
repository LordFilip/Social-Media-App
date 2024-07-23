import styles from './Styles/LoginForm.module.css'
const LoginForm = ({ setIsLogin }) => {
  return (
    <div className={styles.container}>
      <h1>Log In</h1>
      <form>
        <div className={styles.row}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Your email..." />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Your password..." />
        </div>
        <div className={styles.row}>
          <p>
            Do not have an account yet.{' '}
            <span onClick={() => setIsLogin(false)}>Lets sign up</span>
          </p>
        </div>
        <div className={styles.row}>
          <button className={styles.authFormButton}>Log In</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
