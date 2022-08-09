import styled from "styled-components";
import { InputStyle, ButtonStyle } from "../pages/Login";
import ModDay from "./ModDay";

export default function SavedHabit({ name, days }) {
  const weekday = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <Wrapper>
      <span>{name}</span>
      <Semana>
        {weekday.map((day, index) => (
          <ModDay days={days} day={day} id={index} key={index} />
        ))}
      </Semana>
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
  margin: 7px 0;

  p {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 16px;
    color: #52b6ff;
  }

  span {
    font-weight: 400;
    font-size: 20px;
    margin: 0;
    color: #666666;
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
