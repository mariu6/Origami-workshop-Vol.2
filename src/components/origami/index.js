import styles from './index.module.css';

const Origami = ({ description, author }) => {
    console.log(author.username)
    return (
        <div className={styles.post} >
            <img src="blue-origami-bird.png" alt="ORIGAMI" />
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