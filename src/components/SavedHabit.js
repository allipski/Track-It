import styled from "styled-components";
import ModDay from "./ModDay";
import PersonContext from "../contexts/PersonContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function SavedHabit({ getHabitos, setList, id, name, days }) {
  const { person } = useContext(PersonContext);
  const config = {
    headers: {
      Authorization: `Bearer ${person.token}`,
    },
  };
  const weekday = ["D", "S", "T", "Q", "Q", "S", "S"];

  function confirmar() {
    return window.confirm(
      "Tem certeza que deseja deletar esse hábito? Essa ação não pode ser desfeita."
    );
  }

  function deletar() {
    if (confirmar) {
      axios
        .delete(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
          config
        )
        .then(() => getHabitos());
    } else {
      return false;
    }
  }

  return (
    <Wrapper>
      <ion-icon name="trash-outline" onClick={() => {confirmar(); deletar()}}></ion-icon>
      <span>{name}</span>
      <Semana>
        {weekday.map((day, index) => (
          <ModDay days={days} day={day} id={index} key={index} />
        ))}
      </Semana>
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
  margin: 7px 0;
  position: relative;

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

  ion-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    color: #666666;
  }
`;

const Semana = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
`;
