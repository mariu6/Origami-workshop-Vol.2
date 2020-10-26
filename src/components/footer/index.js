import styles from './index.module.css';
import Link from "../link";
import bird from "../../images/blue-origami-bird-flipped.png";
import getNavigations from "../../utils/navigation";

const Footer = () => {
    const links = getNavigations();
    return (
        <footer className={styles.footer}>
            {links.map(navElement => {
                return (
                    <Link title={navElement.title} href={navElement.link} type="footer" />
                )
            })}
            <img src={bird} alt="origami" />
            <p>Software University 2020</p>
        </footer>
    )
}

export default Footer; 