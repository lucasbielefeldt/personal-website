import styles from './App.module.css'
import { SideBar } from './components/SideBar';
import { Home } from './components/Home';

export function App() {

  return (
    <div className={styles.container}>
    <div className={styles.nav}>
      <SideBar />
    </div>
    <div className="content">
    <Home />
    </div>
    </div>
  )
}

