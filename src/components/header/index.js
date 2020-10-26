import styles from './index.module.css';
import Link from "../link";
import bird from "../../images/white-origami-bird.png";
import getNavigations from "../../utils/navigation";

const Header = () => {
    const links = getNavigations();
    return (
        <header className={styles.navigation}>
            <img src={bird} alt="origami" />
            {links.map(nav => {
                return (
                    <Link key={nav.title} title={nav.title} href={nav.link} type="header" />
                )
            })}

        </header>
    )
}

export default Header;