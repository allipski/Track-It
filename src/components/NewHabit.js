import styled from "styled-components";
import { InputStyle, ButtonStyle } from "../pages/Login";

export default function NewHabit() {
  const weekday = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <Wrapper>
      <Input type="text" placeholder="nome do hábito"></Input>
      <Semana>
        {weekday.map((day, index) => (
          <Dia key={index}>{day}</Dia>
        ))}
      </Semana>
      <Botoes>
        <p>Cancelar</p>
        <SaveButton>Salvar</SaveButton>
      </Botoes>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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

const Dia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid #d4d4d4;
  color: #dbdbdb;
  border-radius: 5px;
  font-size: 20px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
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
