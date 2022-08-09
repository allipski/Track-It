import { useState } from "react";
import styled from "styled-components";

export default function Dia({ day, id, dias, setDias }) {
  const [selected, setSelected] = useState(false);

  return (
    <Wrapper
      selected={selected}
      onClick={() => {
        setSelected(!selected);
        setDias(
          dias.includes(id)
            ? dias.filter((item) => {
                if (item != id) {
                  return item;
                }
              })
            : [...dias, id]
        );
      }}
    >
      {day}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid #d4d4d4;
  color: ${(props) => (props.selected ? "#FFFFFF" : "#CFCFCF")};
  background-color: ${(props) => (props.selected ? "#CFCFCF" : "#FFFFFF")};
  border-radius: 5px;
  font-size: 20px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
`;
