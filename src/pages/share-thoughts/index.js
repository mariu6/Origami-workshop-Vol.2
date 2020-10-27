import Origamis from "../../components/origamis";
import PageLayout from "../../components/page-layout";
import SubmitButton from "../../components/submit-button";
import Title from "../../components/title";
import styles from './index.module.css';

const App = () => {
  return (
    <PageLayout>
       <Title title="Share your thoughts..." />
        <textarea className={styles.textarea} placeholder="Publication..." />
        <SubmitButton title="Post" />
        <div>
          <Origamis length={3} />
        </div>
    </PageLayout>
  );
}

export default App;
