import styles from './App.module.css'
import { SideBar } from './components/SideBar';

export function App() {

  return (
    <div className={styles.nav}>
      <SideBar />
    </div>
  )
}

