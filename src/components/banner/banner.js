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

const Header = styled.p`
  color : #fff
  text-align: center
  font-weight: bold
  font-size: 2em
  padding-bottom: 3%
  width : 50%
`;

const Sidebar = posed.div({
  enter: {
    x: "0%",
    beforeChildren: true,
    staggerChildren: 50
  }
});

const charPoses = {
  exit: { opacity: 0 },
  enter: { opacity: 1 }
};

export default function home() {
  return (
    <Div>
      <div style={{ paddingTop: "10%", textAlign: "right" }}>
        <Quote />

        <Sidebar initialPose="exit" pose="enter">
          <Header>
            <SplitText charPoses={charPoses}>
              Providing a launchpad to build for the next Billion Users.
            </SplitText>
          </Header>
        </Sidebar>
      </div>
    </Div>
  );
}
