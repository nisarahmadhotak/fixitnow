import styled from "styled-components";

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid #345148;
  border-color: ${props => (props.cart ? "var(--mainYellow)" : "#345148")};
  border-radius: 0.5rem;
  color: ${props => (props.cart ? "var(--mainYellow)" : "#345148")};
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${props => (props.cart ? "var(--mainYellow)" : "#345148")};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
export default ButtonContainer;
