import styles from './index.module.css';
import bird from "../../images/blue-origami-bird.png"

const Origami = ({ description, author }) => {
    console.log(author.username)
    return (
        <div className={styles.post} >
            <img src={bird} alt="ORIGAMI" />
            <p className={styles.description}>
                {description}
            </p>
            <div>
                <span>
                    <small>Author:</small>
                    {author.username}
                </span>
            </div>
        </div>
    )
}

export default Origami;