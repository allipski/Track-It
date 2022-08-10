import styled from "styled-components";
import profile from "../images/profile.png";
import PersonContext from "../contexts/PersonContext";
import { useContext } from "react";

export default function Topbar() {
    const { person } = useContext(PersonContext);

  return (
    <Wrapper>
      <h3>TrackIt</h3>
      <img src={person.image} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: #126ba5;
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  z-index: 50;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  h3 {
    font-family: "Playball", cursive;
    font-weight: 400;
    font-size: 40px;
    color: #ffffff;
  }
`;
