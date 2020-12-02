import Origamis from "../../components/origamis";
import PageLayout from "../../components/page-layout";
import SubmitButton from "../../components/submit-button";
import Title from "../../components/title";
// import styles from './index.module.css';
import styled from "styled-components";
import { useState } from "react";
import getCookie from "../../utils/cookieParser";
import getOrigami from "../../utils/origami";

const App = () => {
  const [publication, setPublication] = useState("");
  const [updatedOrigami, setUpdatedOrigami] = useState([])
  const handleSubmit = async () => {
    // console.log("Getting into handleSubmit!");
    const promise = await fetch("http://localhost:9999/api/origami", {
      method:"POST",
      body: JSON.stringify({
        description: publication
      }),
      headers: {
        "Content-Type": "Application/json",
        "Authorization": getCookie("x-auth-token")
      }
    })
    // const data = await promise.json();
    // console.log(data); 
    setPublication("")        // зачиствам инпут полето
    const origamis = await getOrigami(3);    // взимаме оригамитата и ги ползваме като флаг за да ъпдейтнем 
    setUpdatedOrigami(origamis)              // updated origami масива, който тригърва ре-рендериране н последните 3 поста в share-thoughts
  }

  return (
    <PageLayout>
      <Title title="Share your thoughts..." />
      <TextArea placeholder="Publication..." value={publication} onChange={e => setPublication(e.target.value)} />
      <RedSubmitButton title="Post" onClick={handleSubmit} />
      <div>
        <Origamis length={3} updatedOrigami={updatedOrigami}/>
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
