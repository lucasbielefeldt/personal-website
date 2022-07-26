import { Browsers, CircleWavyCheck, Envelope, House, IdentificationCard } from "phosphor-react/dist";
import styles from "./SideBar.module.css";

export function SideBar() {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <img src="" alt="logo" />
        </div>
        <ul className={styles.sidebar}>
            <li><a href=""><i><House size={30}/></i>Home</a></li>
            <li><a href=""><i><IdentificationCard size={30}/></i>About</a></li>
            <li><a href=""><i><CircleWavyCheck size={30} /></i>Services</a></li>
            <li><a href=""><i><Browsers size={30} /></i>Portfolio</a></li>
            <li><a href=""><i><Envelope size={30} /></i>Contact</a></li>
        </ul>
    </div>
  );
}
