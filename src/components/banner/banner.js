import React from "react";
import styled from "styled-components";
import { Grid } from "semantic-ui-react";
import posed from "react-pose";
import SplitText from "react-pose-text";
import Quote from "./text/quote";
import Flex from "styled-flex-component";
import Header from "./header";
import Sponsors from "./sponsors";
import { ReactComponent as Image } from "./banner.svg";

// remove height property later to increase responsivness ...
const Div = styled.div`
  width: 100%
  background :  #E5E5E5
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

const Head = styled.p`
  color : #0e2f5a
  text-align: center
  font-weight: bold
  font-size: 1.5em
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
    <>
      <Header />

      <Div>
        <Image style={{ maxHeight: "55%", maxWidth: "70%" }} />

        <div style={{ paddingTop: "5%", textAlign: "right" }}>
          <Quote />

          <Sidebar initialPose="exit" pose="enter">
            <Head>
              <SplitText charPoses={charPoses}>
                Providing a launchpad to build for the next Billion Users.
              </SplitText>
            </Head>
          </Sidebar>
        </div>
      </Div>
      <Sponsors />
    </>
  );
}
