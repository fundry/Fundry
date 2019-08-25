import React from "react";
import styled from "styled-components";
import posed from "react-pose";
import SplitText from "react-pose-text";
import Flex from "styled-flex-component";
import { observer, inject } from "mobx-react";

import Quote from "./text/quote";
import Sponsors from ".././support/sponsors";
import { ReactComponent as Image } from "./baner.svg";
import useWindowWidth from "../../hook_style";
import { Header } from "../../components/";

// remove height property later to increase responsivness ...
const Div = styled.div`
  width: 100%
  background :  #f9db93
`;

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    paddingTop: "5px",
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.2,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});

const Button = styled(Box)`
  background: #0748a8;
  text-align: center;
  border-radius: 3px;
  border: 0.5px solid palevioletred;
  color: white;
  margin: 0 1em;
  padding: 0.7em 2em;
  font-size: 0.95em;
`;

const Head = styled.h2`
  color : #0e2f5a
  text-align: center 
  padding-bottom: 3%
  width : 70%
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

const Home = props => {
  const hook_style = useWindowWidth();

  console.log(props.Store.count);

  return (
    <div>
      <Header />
      {hook_style >= 750 ? (
        <div>
          <Div>
            <Flex>
              <Image
                style={{ maxHeight: "70%", maxWidth: "75%", paddingTop: "4%" }}
              />

              <div style={{ paddingTop: "2%", textAlign: "center" }}>
                <Quote />
                <Sidebar initialPose="exit" pose="enter">
                  <Head style={{ textAlign: "center" }}>
                    <SplitText charPoses={charPoses}>
                      Providing a launchpad to build for the next Billion Users.
                    </SplitText>
                  </Head>
                </Sidebar>
                <Flex justifyCenter />
                <br />
              </div>
            </Flex>
          </Div>
        </div>
      ) : (
        <Div>
          <br />
          <div style={{ textAlign: "center" }}>
            <Image style={{ maxWidth: "75%" }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <Flex justifyCenter>
              <Quote />
            </Flex>
            <Sidebar initialPose="exit" pose="enter">
              <Flex justifyCenter>
                <Head
                  style={{
                    fontSize: "1.7em"
                  }}
                >
                  <SplitText charPoses={charPoses}>
                    Providing a launchpad to build for the next Billion Users.
                  </SplitText>
                </Head>
              </Flex>
            </Sidebar>
          </div>
          <br /> <br />
        </Div>
      )}

      <Sponsors />
    </div>
  );
};

/*
   {props.Store.count}
      <button onClick={() => props.Store.increase}>click</button>
      */

export default inject("Store")(observer(Home));
