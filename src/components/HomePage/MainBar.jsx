import styles from './Styles/MainBar.module.css'
import CreatePostModal from './MainBar/CreatePostModal'

const MainBar = () => {
  return (
    <div className={styles.MainBar}>
      <CreatePostModal />
    </div>
  )
}

export default MainBar
