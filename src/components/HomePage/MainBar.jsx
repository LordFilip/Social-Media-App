import styles from './Styles/MainBar.module.css'
import CreatePostModal from './MainBar/CreatePostModal'

const MainBar = () => {
  return (
    <div className={styles.MainBar}>
      <div className={styles.createPostModalContainer}>
        <CreatePostModal />
      </div>
    </div>
  )
}

export default MainBar
