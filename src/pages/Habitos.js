import Topbar from "../components/Topbar";
import styled from "styled-components";
import { ButtonStyle } from "./Login";
import NewHabit from "../components/NewHabit";
import Bottombar from "../components/Bottombar";

export default function Habitos() {
  return (
    <>
      <Topbar />
      <Wrapper>
        <Cabecalho>
          <h3>Meus hábitos</h3>
          <AddButton>
            <ion-icon name="add-outline"></ion-icon>
          </AddButton>
        </Cabecalho>
        <NewHabit />
        <h4>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </h4>
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

  h4 {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    margin: 25px 0;
  }
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
`;

const AddButton = styled(ButtonStyle)`
  width: 40px;
  height: 35px;
  font-size: 27px;
  ion-icon {
    --ionicon-stroke-width: 60px;
  }
`;

export { Wrapper, Cabecalho };
