import styles from './index.module.css';

const Link = ({ title, href }) => {
    return (
        <div className={styles.listItem}>
            <a href={href}>
                {title}
            </a>
        </div>
    )
}

export default Link;