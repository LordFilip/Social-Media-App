import LeftSidebar from '../components/HomePage/LeftSidebar'
import MainBar from '../components/HomePage/MainBar'
import RightSidebar from '../components/HomePage/RightSidebar'
import styles from './Styles/HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <LeftSidebar />
      <MainBar />
      <RightSidebar />
    </div>
  )
}

export default HomePage
