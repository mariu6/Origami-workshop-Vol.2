import styles from './index.module.css';
import Link from "../link";
import bird from "../../images/white-origami-bird.png";
import getNavigations from "../../utils/navigation";

const Header = () => {
    const links = getNavigations();
    return (
        <header className={styles.navigation}>
            <img src={bird} alt="origami" />
            {links.map(navElement => {
                return (
                    <Link title={navElement.title} href={navElement.link} type="header" />
                )
            })}

        </header>
    )
}

export default Header;