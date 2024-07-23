import styles from './ErrorModal.module.css'

const ErrorModal = ({ modal, setModal, error }) => {
  return (
    <div className={`${styles.modal} ${!modal ? styles.modalInvisible : ''}`}>
      <h1 className={styles.buttonH1}>{error}</h1>
      <button className={styles.modalButton} onClick={() => setModal(false)}>
        X
      </button>
    </div>
  )
}

export default ErrorModal
