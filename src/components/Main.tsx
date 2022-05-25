import React from "react";
import styled from "styled-components";
import { Header } from "./Common/Header";

export const Main = () => {
  return (
    <Wrap>
      <Header />
    </Wrap>
  );
};

const Wrap = styled.div`
  align-items: center;
`;
