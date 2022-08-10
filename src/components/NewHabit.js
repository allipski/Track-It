import styled from "styled-components";
import { InputStyle, ButtonStyle } from "../pages/Login";
import axios from "axios";
import PersonContext from "../contexts/PersonContext";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Dia from "./Dia";

export default function NewHabit({ getHabitos, setAdd }) {
  const { person } = useContext(PersonContext);
  const config = {
    headers: {
      Authorization: `Bearer ${person.token}`,
    },
  };
  const weekday = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [dias, setDias] = useState([]);
  const [habito, setHabito] = useState("");
  const [data, setData] = useState("");

  function saveNewHabit(event) {
    setData(null);
    event.preventDefault();
    
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        {
          name: habito,
          days: dias,
        },
        config
      )
      .then((data) => {setData(data); getHabitos(); setAdd(false)}).catch(console.log('deuruim'));
  }

  function Carregamento() {
    if (data === null) {
      return (
        <ThreeDots
          height="20"
          width="49"
          radius="9"
          color="#FFFFFF"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      );
    } else {
      return "Salvar";
    }
  }

  return (
    <Wrapper onSubmit={(event) => {saveNewHabit(event); setData(null)}}>
      <Input
        carregando={data}
        type="text"
        placeholder="nome do hábito"
        onChange={(e) => {
          setHabito(e.target.value);
        }}
      ></Input>
      <Semana>
        {weekday.map((day, index) => (
          <Dia day={day} id={index} dias={dias} setDias={setDias} key={index} />
        ))}
      </Semana>
      <Botoes>
        <p onClick={() => setAdd(false)}>Cancelar</p>
        <SaveButton carregando={data} type="submit">
          <Carregamento />
        </SaveButton>
      </Botoes>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: fit-content;
  padding: 20px;
  gap: 8px;

  p {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 16px;
    color: #52b6ff;
  }
`;

const Input = styled(InputStyle)`
  color: #dbdbdb;
`;

const Semana = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
`;

const Botoes = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 30px;
`;

const SaveButton = styled(ButtonStyle)`
  width: auto;
  height: auto;
  font-size: 16px;
  padding: 8px 16px;
`;
