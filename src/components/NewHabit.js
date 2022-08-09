import { useState} from "react";
import styled from "styled-components";
import { InputStyle, ButtonStyle } from "../pages/Login";
import axios from "axios";
import PersonContext from "../contexts/PersonContext";
import { useContext } from "react";
import Dia from "./Dia";

export default function NewHabit(novo) {
  const { person } = useContext(PersonContext);
  const config = {
    headers: {
      Authorization: `Bearer ${person.token}`,
    },
  };
  const weekday = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [dias, setDias] = useState([]);
  const [habito, setHabito] = useState("");

  function saveNewHabit(event) {
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
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  if (novo) {
    return (
      <Wrapper onSubmit={saveNewHabit}>
        <Input
          type="text"
          placeholder="nome do hábito"
          onChange={(e) => {
            setHabito(e.target.value);
          }}
        ></Input>
        <Semana>
          {weekday.map((day, index) => (
            <Dia
              day={day}
              id={index}
              dias={dias}
              setDias={setDias}
              key={index}
            />
          ))}
        </Semana>
        <Botoes>
          <p>Cancelar</p>
          <SaveButton type="submit">Salvar</SaveButton>
        </Botoes>
      </Wrapper>
    );
  }
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
