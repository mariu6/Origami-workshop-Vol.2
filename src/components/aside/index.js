import styles from './index.module.css';
import Link from '../link';
import getNavigations from "../../utils/navigation";

const Aside = () => {
    const links = getNavigations();
    return (
        <aside className={styles.aside}>
            {links.map(nav => {
                return (
                    <Link key={nav.title} title={nav.title} href={nav.link} type="aside" />
                )
            })}

        </aside>
    )
}

export default Aside;