import styles from './index.module.css';
import Link from '../link';
import getNavigations from "../../utils/navigation";

const Aside = () => {
    const links = getNavigations();
    return (
        <aside className={styles.aside}>
            {links.map(navElement => {
                return (
                    <Link title={navElement.title} href={navElement.link} type="aside" />
                )
            })}

        </aside>
    )
}

export default Aside;