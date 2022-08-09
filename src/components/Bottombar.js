import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

export default function Bottombar() {

  const percentage = 40;

  return (
    <Wrapper>
      <Link to="/habitos">
        <h4>Hábitos</h4>
      </Link>
      <div>
        <Link to="/hoje">
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
        </Link>
      </div>
      <Link to="/historico">
        <h4>Histórico</h4>
      </Link>
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

  a {
    text-decoration: none;
  }

  img {
    height: 50px;
    width: 50px;
  }

  h4 {
    font-weight: 400;
    color: #52b6ff;
  }

  div {
    height: 91px;
    width: 91px;
    left: 50%;
    margin-bottom: 40px;
  }
`;
