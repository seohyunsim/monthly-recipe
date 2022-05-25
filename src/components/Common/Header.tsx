import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <Wrap>
      오늘<Title>뭐먹지</Title>?
    </Wrap>
  );
};

const Wrap = styled.div`
  @font-face {
    font-family: "SANJUGotgam";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2112@1.0/SANJUGotgam.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  border: 1px solid;
  text-align: center;
  padding: 1em;
  font-family: "SANJUGotgam";
  font-size: 30px;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 33px;
  font-family: "SANJUGotgam";
  padding-left: 15px;
  color: #e7bc00dd;
`;
