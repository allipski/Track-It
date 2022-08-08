import styled from "styled-components";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import PersonContext from "../contexts/PersonContext";
import { useContext } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const { setPerson } = useContext(PersonContext);

  function postLogin(event) {
    event.preventDefault();
    setData(null);
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        {
          email: email,
          password: password,
        }
      )
      .then((answer) => {setData(answer); navigate("/hoje"); setPerson(answer.data)})
      .catch((err) => {console.log(err); setData(""); alert("Email ou senha incorretos, revise seus dados e tente novamente"); setEmail(""); setPassword(""); setData("")});
  }

  function Carregamento() {
    if (data === null) {
      return (
        <ThreeDots
          height="70"
          width="70"
          radius="9"
          color="#FFFFFF"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      );
    } else {
      return ("Entrar");
    }
  }

  return (
    <Wrapper>
      <img src={logo} />
      <FormStyle onSubmit={postLogin}>
        <InputStyle carregando={data}
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></InputStyle>
        <InputStyle carregando={data}
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></InputStyle>
        <ButtonStyle carregando={data} type="submit"><Carregamento /></ButtonStyle>
      </FormStyle>
      <LinkStyle>
        <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
      </LinkStyle>
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
  background-color: ${props => props.carregando === null ? '#F2F2F2' : '#FFFFFF'};
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
  opacity: ${props => props.carregando === null ? 0.7 : 1};
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
