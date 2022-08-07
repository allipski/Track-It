import Topbar from "../components/Topbar";
import styled from "styled-components";
import Bottombar from "../components/Bottombar";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import HabitToday from "../components/HabitToday";

export default function Hoje() {
  require("dayjs/locale/pt-br");

  return (
    <>
      <Topbar />
      <Wrapper>
        <Cabecalho>
          <h3>{dayjs().locale("pt-br").format("dddd")}, {dayjs().locale("pt-br").format("DD")}/{dayjs().locale("pt-br").format("MM")} </h3>
        </Cabecalho>
        <HabitToday />
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
