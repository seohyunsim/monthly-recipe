import React from "react";
import styled from "styled-components";
import { Header } from "./Common/Header";
import { Food } from "./Food/Food";

export const Main = () => {
  return (
    <Wrap>
      <Header />
      <Food />
    </Wrap>
  );
};

const Wrap = styled.div`
  align-items: center;
`;
