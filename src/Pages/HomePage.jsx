import LeftSidebar from '../components/HomePage/LeftSidebar'
import MainBar from '../components/HomePage/MainBar'
import RightSidebar from '../components/HomePage/RightSidebar'
import styles from './Styles/HomePage.module.css'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <LeftSidebar />
        <MainBar />
        <RightSidebar />
      </div>
    </div>
  )
}

export default HomePage
