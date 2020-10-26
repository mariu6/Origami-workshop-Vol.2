import styles from './index.module.css';

const SubmitButton = ({ title }) => {     
  return (
      <button className={styles.submit}>{title}</button>            
  )
}

export default SubmitButton;