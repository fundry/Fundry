import React from "react";
import styled from "styled-components";
import Operation from "./operation";

const Div = styled.div`
  width: 100%
  background: transparent
`;

const Header = styled.p`
  color : #0748a8
  text-align: center
  font-weight: bold
  font-size: 2em
`;

const Contain = styled.div`
  margin-left: 3%
  margin-right: 3%
`;

const Text = styled.p``;

export default function home() {
  return (
    <Div>
      <Header> / " Providing a launchpad for ideas " / </Header>

      <Contain>
        <Text> EXPLANATION OF FUNDRY </Text>
      </Contain>
      <br />

      <div>
        <Operation />
      </div>
    </Div>
  );
}
