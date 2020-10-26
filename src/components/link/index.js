import styles from './index.module.css';
import { Link } from 'react-router-dom';

const LinkComponent = ({ title, href }) => {
    return (
        <div className={styles.listItem}>
            <Link to={href}>
                {title}
            </Link>
        </div>
    )
}

export default LinkComponent;