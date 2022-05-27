import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <Wrap>
      <span>monthly recipe</span>
      <Title>이 달의 레시피</Title>
    </Wrap>
  );
};

const Wrap = styled.div`
  border-bottom: 1px solid #cdcdcd;
  text-align: center;
  padding: 2em 0 1em 0;
  span {
    padding: 10px 20px;
    border-radius: 13px;
    background-color: #ddb76f58;
    font-size: 25px;
    font-family: "Playfair Display", serif;
    font-weight: 800;
  }
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 200;
  padding-top: 20px;
`;
