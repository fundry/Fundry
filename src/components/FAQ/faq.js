import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%
  height: 50vh
  background: #1e1f28
`;

const Text = styled.p`
  color: white
  text-align: right
  font-weight: bold
  font-size: 1.5em
  padding-right: 5%
  padding-top: 2%
`;

export default function home() {
  return (
    <Div>
      <Text> FAQ </Text>
    </Div>
  );
}
