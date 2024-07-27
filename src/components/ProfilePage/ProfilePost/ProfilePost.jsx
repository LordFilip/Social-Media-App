import styles from './ProfilePost.module.css'

const ProfilePost = ({ post }) => {
  const randomName = 'John Doe'
  const randomTime = '2 hours ago'

  return (
    <div className={styles.postContainer}>
      <div className={styles.postHeader}>
        <span className={styles.postName}>{randomName}</span>
        <span className={styles.postTime}>{randomTime}</span>
      </div>
      <div className={styles.postMain}>
        <p>{post}</p>
      </div>
    </div>
  )
}

export default ProfilePost
