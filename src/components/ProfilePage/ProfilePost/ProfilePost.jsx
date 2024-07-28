import { formatDistanceToNow, parseISO } from 'date-fns'
import styles from './ProfilePost.module.css'

const ProfilePost = ({ text, time }) => {
  const randomName = 'John Doe'

  // Convert time to a human-readable format
  const formattedTime = formatDistanceToNow(parseISO(time), { addSuffix: true })

  return (
    <div className={styles.postContainer}>
      <div className={styles.postHeader}>
        <span className={styles.postName}>{randomName}</span>
        <span className={styles.postTime}>{formattedTime}</span>
      </div>
      <div className={styles.postMain}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ProfilePost
