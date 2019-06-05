import React from "react";
import styled from "styled-components";
import { Grid } from "semantic-ui-react";
import posed from "react-pose";
import SplitText from "react-pose-text";
import Quote from "./text/quote";
import Flex from "styled-flex-component";

// remove height property later to increase responsivness ...
const Div = styled.div`
  width: 100%
  height : 50vh
  background: linear-gradient(to bottom,#1497e2,#1549e6);
`;

const Text = styled.p`
  color : #f9db93
  // font-family :   comic sans ms;
  font-size : 4em
  margin-right : 10%
  margin-right : 10%
  padding-left : 5px
  padding-top : 5px
`;

export default function home() {
  return (
    <Div>
      <div style={{ paddingTop: "10%" }}>
        <Flex justifyCenter>
          <Quote />
          <Text> Your Idea </Text>
        </Flex>
      </div>
    </Div>
  );
}
