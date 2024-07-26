import styles from './CreatePostModal.module.css'
import useSetPost from '../../../hooks/useSetPost'
import { useState } from 'react'
import image from '../../../../public/assets/auth-image.jpg'

const CreatePostModal = () => {
  const { addPost, loading, error } = useSetPost()
  const [post, setPost] = useState('')
  const [localError, setLocalError] = useState(null)

  const handleAddPost = async () => {
    if (!post.trim()) {
      setLocalError('Post content cannot be empty.')
      return
    }

    const success = await addPost(post)
    if (success) {
      setPost('')
      setLocalError(null)
    }
  }

  const handleInputChange = (e) => {
    setPost(e.target.value)
    setLocalError(null)
  }

  return (
    <div className={styles.createPostModal}>
      <h1 className={styles.modalTitle}>Add New Post</h1>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={image} alt="" />
        </div>
        <div className={styles.right}>
          <input
            className={styles.textInput}
            type="text"
            placeholder="What's happening?"
            value={post}
            onChange={handleInputChange}
            disabled={loading}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                handleAddPost()
              }
            }}
          />
          {localError && <p className={styles.error}>{localError}</p>}
          {error && <p className={styles.error}>{error}</p>}
          <button
            className={styles.submitButton}
            onClick={handleAddPost}
            disabled={loading}
          >
            {loading ? 'Posting...' : 'Add Post'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatePostModal
