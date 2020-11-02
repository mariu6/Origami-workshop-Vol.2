import Origamis from "../../components/origamis";
import PageLayout from "../../components/page-layout";
import SubmitButton from "../../components/submit-button";
import Title from "../../components/title";
// import styles from './index.module.css';
import styled from "styled-components";

const App = () => {
  return (
    <PageLayout>
      <Title title="Share your thoughts..." />
      <TextArea placeholder="Publication..." />
      <RedSubmitButton title="Post" />
      <div>
        <Origamis length={3} />
      </div>
    </PageLayout>
  );
}

// Styled Components (за css)component:
const TextArea = styled.textarea`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    height: 200px;
    resize: none;
`

const RedSubmitButton = styled(SubmitButton)`
position: relative;
`


export default App;
