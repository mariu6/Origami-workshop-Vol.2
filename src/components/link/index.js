import styles from './index.module.css';

const Link = ({ title, href }) => {
    return (
        <li className={styles.listItem}>
            <a href={href}>
                {title}
            </a>
        </li>
    )
}

export default Link;