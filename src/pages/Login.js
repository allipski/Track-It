import styled from "styled-components";
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Wrapper>
      <img src={logo} />
      <FormStyle>
        <InputStyle type="email" placeholder="email"></InputStyle>
        <InputStyle type="password" placeholder="senha"></InputStyle>
        <ButtonStyle type="submit">Entrar</ButtonStyle>
      </FormStyle>
      <LinkStyle><Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link></LinkStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 68px;
  width: 100%;
  height: 100%;

  img {
    height: 180px;
    width: 180px;
    margin-bottom: 32px;
  }
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  gap: 6px;
`;

const InputStyle = styled.input`
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  width: 100%;
  height: 45px;
  padding: 11px;
  font-family: "Lexend Deca", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #d4d4d4;
`;

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Lexend Deca", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
  background-color: #52b6ff;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 45px;
`;

const LinkStyle = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #52b6ff;
  text-decoration: underline;
  margin-top: 25px;
`;

export { Wrapper, FormStyle, LinkStyle, ButtonStyle, InputStyle };
