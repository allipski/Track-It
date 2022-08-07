import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Bottombar() {
  const percentage = 80;
  return (
    <Wrapper>
      <h4>Hábitos</h4>
      <div>
        <CircularProgressbar
          value={percentage}
          text="Hoje"
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#52B6FF",
            textColor: "#ffffff",
            pathColor: "#ffffff",
            trailColor: "transparent",
          })}
        />
      </div>
      <h4>Histórico</h4>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  img {
    height: 50px;
    width: 50px;
  }

  h4 {
    font-weight: 400;
    color: #52B6FF;
  }

  div {
    height: 91px;
    width: 91px;
    left: 50%;
    margin-bottom: 40px;
  }
`;
