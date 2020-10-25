import styles from './index.module.css';
import Link from "../link"

const Header = () => {
    return (
        <header className={styles.navigation}>
                <Link title="Going to 1" href="#"/>
                <Link title="Going to 2" href="#"/>
                <Link title="Going to 3" href="#"/>
                <Link title="Going to 4" href="#"/>
                <Link title="Going to 5" href="#"/>
                <Link title="Going to 6" href="#"/>
        </header>
    )
}

export default Header;