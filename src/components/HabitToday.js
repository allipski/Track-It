import { useState } from "react";
import styled from "styled-components";

export default function HabitToday({
  name,
  done,
  currentSequence,
  highestSequence,
}) {
  const [feito, setFeito] = useState(done);

  return (
    <Wrapper>
      <Textinho feito={feito} atual={currentSequence} record={highestSequence}>
        <h3>{name}</h3>
        <h4>
          Sequência atual: <span>{currentSequence} dias</span>
        </h4>
        <h4>
          Seu recorde: <span>{highestSequence} dias</span>
        </h4>
      </Textinho>
      <DoneButton onClick={() => setFeito(!feito)} feito={feito}>
        <ion-icon name="checkmark"></ion-icon>
      </DoneButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: fit-content;
  padding: 20px;
  margin: 7px 0;
`;

const Textinho = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: #666666;
  font-weight: 400;
  font-family: "Lexend Deca";

  h3 {
    font-size: 20px;
    line-height: 25px;
    margin: 0 0 8px 0;
  }

  h4 {
    font-size: 13px;
    line-height: 16px;
    margin: 0;
  }

  span {
    font-size: 13px;
    line-height: 16px;
    margin: 0;
    color: ${(props) => (props.feito ? "#8FC549" : "#666666")};
  }

  span:nth-of-type(2) {
    color: ${(props) => (props.feito && (props.atual == props.record) ? "#8FC549" : "#666666")};
  }
`;

const DoneButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  font-size: 50px;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  background-color: ${(props) => (props.feito ? "#8FC549" : "#EBEBEB")};
  color: #ffffff;

  ion-icon {
    --ionicon-stroke-width: 60px;
  }
`;
