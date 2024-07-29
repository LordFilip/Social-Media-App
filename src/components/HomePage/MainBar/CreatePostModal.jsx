import styles from './CreatePostModal.module.css'
import useSetPost from '../../../hooks/useSetPost'
import { useState } from 'react'
import useGetUser from '../../../hooks/useGetUser'
import image from '../../../../public/assets/no-profile-photo.jpg'

const CreatePostModal = () => {
  const { addPost, loading, error } = useSetPost()
  const [post, setPost] = useState('')
  const [localError, setLocalError] = useState(null)
  const { user } = useGetUser()

  const handleAddPost = async () => {
    if (!post.trim()) {
      setLocalError('Post content cannot be empty.')
      return
    }

    const success = await addPost(post)
    if (success) {
      setPost('')
      setLocalError(null)
    } else {
      setLocalError('Failed to add post. Please try again.')
    }
  }

  const handleInputChange = (e) => {
    setPost(e.target.value)
    setLocalError(null)
  }

  return (
    <div className={styles.createPostModal}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img
            src={user?.profilePicURL || image}
            alt="Profile"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.right}>
          <input
            className={styles.textInput}
            type="text"
            placeholder="What's happening?"
            value={post}
            onChange={handleInputChange}
            disabled={loading}
            onKeyDown={(e) => {
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
