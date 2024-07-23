import styles from './ErrorModal.module.css'

const ErrorModal = ({ modal, setModal }) => {
  return (
    <div className={`${styles.modal} ${!modal ? styles.modalInvisible : ''}`}>
      <h1>Please fill the form</h1>
      <button onClick={() => setModal(false)}>Ok</button>
    </div>
  )
}

export default ErrorModal
