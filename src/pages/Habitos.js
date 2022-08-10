import Topbar from "../components/Topbar";
import styled from "styled-components";
import { ButtonStyle } from "./Login";
import NewHabit from "../components/NewHabit";
import SavedHabit from "../components/SavedHabit";
import Bottombar from "../components/Bottombar";
import axios from "axios";
import PersonContext from "../contexts/PersonContext";
import ProgressContext from "../contexts/ProgressContext";
import { useContext, useEffect, useState } from "react";

export default function Habitos() {
  const { person } = useContext(PersonContext);
  const { progress, setProgress } = useContext(ProgressContext);
  const config = {
    headers: {
      Authorization: `Bearer ${person.token}`,
    },
  };
  const [list, setList] = useState([]);
  const [add, setAdd] = useState(false);

  function getHabitos() {
    axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,
      config
    ).then((answer) => setList(answer.data))
  }
    useEffect(() => {
      getHabitos();
    }, []);

function TemHabito() {
  if (list.length === 0) {
    if (add) {
      return (<><NewHabit getHabitos={getHabitos} setList={setList} setAdd={setAdd} />
        <h4>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </h4></>)
    } else {
      return (<h4>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </h4>)
    }
  } else {
  if (add){
    return(
      <><NewHabit getHabitos={getHabitos} setList={setList} setAdd={setAdd} />
      {list.map((item, index) => (
          <SavedHabit setList={setList} key={index} id={item.id} name={item.name} days={item.days} />
        ))}
      </>
    )
  } else {
    return(list.map((item, index) => (
      <SavedHabit getHabitos={getHabitos} key={index} id={item.id} name={item.name} days={item.days} />
    )))
  }
}
}

  return (
    <>
      <Topbar />
      <Wrapper>
        <Cabecalho>
          <h3>Meus hábitos</h3>
          <AddButton onClick={() => setAdd(true)}>
            <ion-icon name="add-outline"></ion-icon>
          </AddButton>
        </Cabecalho>
        <TemHabito />
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
