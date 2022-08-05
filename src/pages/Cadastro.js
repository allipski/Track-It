import { Wrapper, FormStyle, LinkStyle, ButtonStyle, InputStyle } from './Login'
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';

export default function Cadastro() {
  return (
    <Wrapper>
      <img src={logo} />
      <FormStyle>
        <InputStyle type="email" placeholder="email"></InputStyle>
        <InputStyle type="password" placeholder="senha"></InputStyle>
        <InputStyle type="text" placeholder="nome"></InputStyle>
        <InputStyle type="url" placeholder="foto"></InputStyle>
        <ButtonStyle type="submit">Cadastrar</ButtonStyle>
      </FormStyle>
      <LinkStyle><Link to='/'>Já tem uma conta? Faça login!</Link></LinkStyle>
    </Wrapper>
  );
}