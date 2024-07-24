import styles from './CreatePostModal.module.css'

const CreatePostModal = () => {
  return (
    <div className={styles.createPostModal}>
      <h1 className={styles.modalTitle}>Create Post</h1>
      <input
        className={styles.textInput}
        type="text"
        placeholder="What's happening?"
      />
      <button className={styles.submitButton} type="submit">
        Post
      </button>
    </div>
  )
}

export default CreatePostModal
