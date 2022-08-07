import Topbar from "../components/Topbar";
import styled from "styled-components";
import Bottombar from "../components/Bottombar";
import { Wrapper, Cabecalho } from "./Habitos";

export default function Hoje() {
  require("dayjs/locale/pt-br");
  return (
    <>
      <Topbar />
      <Wrappering>
        <Cabecalho>
          <h3>Histórico</h3>
        </Cabecalho>
        <h4>Em breve você poderá ver o histórico dos seus hábitos aqui!</h4>
      </Wrappering>
      <Bottombar />
    </>
  );
}

const Wrappering = styled(Wrapper)`
  h3,
  h4 {
    margin: 0;
  }
`;
