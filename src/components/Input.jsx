import styled from 'styled-components'

const StyledAuthInputContainer = styled.div`
  width: 50%;
  margin-top: 30px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f5f8fa;
  width: 100%;
  height: 54px;
  border-bottom: 2px solid black;
`;
const StyledLabel = styled.label`
  font-size: 14;
  color: '#696974';
  text-align: start;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  background-color: #f5f8fa;
  border-radius: 0px;
`;

function Input({ type, label, value, placeholder }) {
  return (
    <StyledAuthInputContainer>
      <StyledContainer>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput
          type={type || "text"}
          value={value || ''}
          placeholder={placeholder || ''}
        />
      </StyledContainer>
    </StyledAuthInputContainer>
    
  )
}

export default Input;