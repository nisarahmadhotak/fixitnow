import styled from "styled-components";

const ButtonRedGreen = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--mainRed);
  border-color: ${props => (props.red ? "var(--mainRed)" : "var(--mainGreen)")};
  border-radius: 0.5rem;
  color: ${props => (props.red ? "var(--mainRed)" : "var(--mainGreen)")};
  padding: 0.6rem 1rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${props => (props.red ? "var(--mainRed)" : "var(--mainGreen)")};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
export default ButtonRedGreen;
