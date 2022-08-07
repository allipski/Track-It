import styled from "styled-components";

export default function HabitToday() {
  return (
    <Wrapper>
      <Textinho>
        <h3>Ler 1 capítulo de livro</h3>
        <h4>Sequência atual: 3 dias</h4>
        <h4>Seu recorde: 5 dias</h4>
      </Textinho>
      <DoneButton>
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
`;

const DoneButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  font-size: 50px;
  border: 1px solid #E7E7E7;
  border-radius: 5px;
  background-color: #EBEBEB;
  color: #FFFFFF;

  ion-icon {
    --ionicon-stroke-width: 60px;
  }
`;
