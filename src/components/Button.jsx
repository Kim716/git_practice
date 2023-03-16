import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px;
  width: 100%;
  background: orange;
  border: 1px solid orange;
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    color: orange;
    background: #ffffff;
  }
`;

function Button({ buttonName, onClick }) {
  return <StyledButton onClick={onClick}>{buttonName}</StyledButton>;
}

export default Button;
