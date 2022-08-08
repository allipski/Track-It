import {
  Wrapper,
  FormStyle,
  LinkStyle,
  ButtonStyle,
  InputStyle,
} from "./Login";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");


  function postCadastro(event) {
    event.preventDefault();
    setData(null);
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
        {
          email: email,
          name: name,
          image: image,
          password: password,
        }
      )
      .then((answer) => {setData(answer); console.log(answer);})
      .catch((err) => {console.log(err); setData("")});
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
      return "Cadastrar";
    }
  }

  return (
    <Wrapper>
      <img src={logo} />
      <FormStyle onSubmit={postCadastro}>
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
        <InputStyle carregando={data}
          type="text"
          placeholder="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></InputStyle>
        <InputStyle carregando={data}
          type="url"
          placeholder="foto"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></InputStyle>
        <ButtonStyle carregando={data} type="submit"><Carregamento /></ButtonStyle>
      </FormStyle>
      <LinkStyle>
        <Link to="/">Já tem uma conta? Faça login!</Link>
      </LinkStyle>
    </Wrapper>
  );
}
