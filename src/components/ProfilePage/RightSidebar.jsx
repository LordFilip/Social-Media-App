import styles from './Styles/RightSidebar.module.css'
import useGetPosts from '../../hooks/useGetPosts'
import ProfilePost from './ProfilePost/ProfilePost'
import CreatePostModal from '../HomePage/MainBar/CreatePostModal'

const RightSidebar = () => {
  const { posts, loading, error } = useGetPosts()

  return (
    <div className={styles.rightSidebar}>
      {' '}
      <CreatePostModal className={styles.modalWidth} />
      {loading && <p>Loading posts...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {posts.length === 0 && !loading && <p>No posts available</p>}
      {posts.map((post, index) => (
        <ProfilePost text={post.text} time={post.time} key={index} />
      ))}
    </div>
  )
}

export default RightSidebar
