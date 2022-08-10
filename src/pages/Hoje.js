import Topbar from "../components/Topbar";
import styled from "styled-components";
import Bottombar from "../components/Bottombar";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import HabitToday from "../components/HabitToday";
import axios from "axios";
import PersonContext from "../contexts/PersonContext";
import { useContext, useEffect, useState } from "react";

export default function Hoje() {
  const { person } = useContext(PersonContext);
  const config = {
    headers: {
      Authorization: `Bearer ${person.token}`,
    },
  };
  const [list, setList] = useState([]);
  function getHabitos() {
    axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,
      config
    ).then((answer) => {setList(answer.data); console.log(answer.data)})
  }
    useEffect(() => {
      getHabitos();
    }, []);
  return (
    <>
      <Topbar />
      <Wrapper>
        <Cabecalho>
          <h3>
            {dayjs().locale("pt-br").format("dddd")},{" "}
            {dayjs().locale("pt-br").format("DD/MM")}
          </h3>
        </Cabecalho>
        {list.map((item, index) => (
          <HabitToday key={index}
            name={item.name}
            done={item.done}
            currentSequence={item.currentSequence}
            highestSequence={item.highestSequence}
          />
        ))}
      </Wrapper>
      <Bottombar />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 72px 20px 72px 20px;
`;

const Cabecalho = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 23px;
  color: #126ba5;

  h3 {
    text-transform: capitalize;
  }
`;
