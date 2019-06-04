import React from "react";
import styled from "styled-components";
import { Grid } from "semantic-ui-react";
import posed from "react-pose";
import SplitText from "react-pose-text";

// remove height property later to increase responsivness ...
const Div = styled.div`
  width: 100%
  height : 50vh
  background: linear-gradient(to bottom,#1497e2,#1549e6);
`;

const Text = styled.p`
  color : #f9db93
  font-weight : bold
  text-align : center
  font-size : 2em
`;

export default function home() {
  return (
    <Div>
      <Text> Build You Idea </Text>
    </Div>
  );
}
