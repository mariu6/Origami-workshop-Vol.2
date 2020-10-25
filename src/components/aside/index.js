import styles from './index.module.css';
import Link from '../link';

const Aside = ({ title, href }) => {
    return (
        <aside className={styles.aside}>
            <Link title="Going to 1" href="#" />
            <Link title="Going to 2" href="#" />
            <Link title="Going to 3" href="#" />
            <Link title="Going to 4" href="#" />
            <Link title="Going to 5" href="#" />
            <Link title="Going to 6" href="#" />
        </aside>
    )
}

export default Aside;