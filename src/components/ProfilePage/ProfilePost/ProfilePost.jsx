import { formatDistanceToNow, parseISO } from 'date-fns'
import styles from './ProfilePost.module.css'
import { FaRegHeart } from 'react-icons/fa'
import { FaRegCommentDots } from 'react-icons/fa'
import { FaRegShareSquare } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'
import { HiDotsHorizontal } from 'react-icons/hi'
import { useState } from 'react'

const ProfilePost = ({ text, time, username }) => {
  const formattedTime = formatDistanceToNow(parseISO(time), { addSuffix: true })

  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className={styles.postContainer}>
      <div className={styles.postHeader}>
        <span className={styles.postName}>@{username}</span>
        <HiDotsHorizontal className={styles.options} />
      </div>
      <div className={styles.postSubheader}>
        <span className={styles.postTime}>{formattedTime}</span>
      </div>
      <div className={styles.postMain}>
        <p>{text}</p>
      </div>
      <div className={styles.likeRow}>
        {isLiked ? (
          <FcLike className={styles.icon} />
        ) : (
          <FaRegHeart className={styles.icon} />
        )}
        <FaRegCommentDots className={styles.icon} />
        <FaRegShareSquare className={styles.icon} />
      </div>
    </div>
  )
}

export default ProfilePost
