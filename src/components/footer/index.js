import styles from './index.module.css';
import Link from "../link";
import bird from "../../images/blue-origami-bird-flipped.png";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link title="Going to 1" href="#" />
            <Link title="Going to 2" href="#" />
            <Link title="Going to 3" href="#" />
            <Link title="Going to 4" href="#" />
            <Link title="Going to 5" href="#" />
            <Link title="Going to 6" href="#" />
            <img src={bird} alt="origami" />
            <p>Software University 2020</p>
        </footer>
    )
}

export default Footer; 