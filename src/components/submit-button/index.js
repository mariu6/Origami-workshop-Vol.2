// import styles from './index.module.css';
import styled from "styled-components";

const SubmitButton = ({ title }) => {
  return (
    <Button type="submit">{title}</Button>
  )
}

const Button = styled.button`
  background-color: #234465;
  color: white;
  padding: 1%;
  width: 7%;
  border-radius: 6px;
  display: block;
  margin: 0.5% auto 2% auto;
  border: 2px solid white;

  &:hover {
     background-color: white;
    border: 2px solid #234465;
    color: #234465;
    font-style: italic;
}
`

export default SubmitButton;