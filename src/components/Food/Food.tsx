import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export const Food = () => {
  const [year, setYear] = useState<number>(0);

  useEffect(() => {
    axios
      .get("http://api.nongsaro.go.kr/service/monthFd/monthFdYearLst", {
        params: {
          apiKey: "20220526MWFCAUTSW87V4TGZPV52MW",
        },
      })
      .then((res) => {
        console.log(res);
      });
  });
  return <Wrap>Food</Wrap>;
};

const Wrap = styled.div`
  border: 1px solid;
  text-align: center;
`;
