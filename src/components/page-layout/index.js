import Header from "../header";
import Aside from "../aside";
import Footer from "../footer";
import styles from './index.module.css';

const PageLayout = (props) => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <div className={styles.main}>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageLayout;
