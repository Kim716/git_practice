import styled from 'styled-components'
import Input from './Input'

const StyedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;


function AuthContainer() {

  return (
    <StyedContainer>
      <h1>登入 Alphitter</h1>
      <Input 
        label="帳號"
        type="text"
        placeholder="請輸入帳號"
      />
    </StyedContainer>
  )
}

export default AuthContainer;