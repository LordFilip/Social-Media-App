import styles from './Styles/RightSidebar.module.css'
import useGetPosts from '../../hooks/useGetPosts'
import ProfilePost from './ProfilePost/ProfilePost'

const RightSidebar = () => {
  const { posts, loading, error } = useGetPosts()
  return (
    <div className={styles.rightSidebar}>
      {' '}
      {loading && <p>Loading posts...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {posts.length === 0 && !loading && <p>No posts available</p>}
      {posts.map((post, index) => (
        <ProfilePost post={post} key={index} />
      ))}
      {/*
      <ul className={styles.postList}>
        {posts.map((post, index) => (
          <li key={index} className={styles.postItem}>
            {post}
          </li>
        ))}
      </ul>
      
      */}
    </div>
  )
}

export default RightSidebar
