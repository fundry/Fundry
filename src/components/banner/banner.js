import React from "react";
import styled from "styled-components";
import posed from "react-pose";
import SplitText from "react-pose-text";
import Quote from "./text/quote";
import Flex from "styled-flex-component";
import Header from "./header";
import Sponsors from "./sponsors";
import { ReactComponent as Image } from "./baner.svg";
import useWindowWidth from "../hook_style";

// remove height property later to increase responsivness ...
const Div = styled.div`
  width: 100%
  background :  #f9db93
`;

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    paddingTop: "15px",
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
  border-radius: 5px;
  height: 50px;
  padding-top: 5px;
  width: 40%;
  border: 0.5px solid palevioletred;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 0.95em;
`;

const Head = styled.p`
  color : #0e2f5a
  text-align: center
  font-weight: bold
  font-size: 1.5em
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

const Home = () => {
  const test = useWindowWidth();

  return (
    <>
      <Header />
      {test >= 700 ? (
        <div>
          <Div>
            <Flex>
              <Image
                style={{ maxHeight: "70%", maxWidth: "75%", paddingTop: "4%" }}
              />

              <div style={{ paddingTop: "2%", textAlign: "center" }}>
                <Quote />

                <Sidebar initialPose="exit" pose="enter">
                  <Head style={{ marginLeft: "5%", fontSize: "2em" }}>
                    <SplitText charPoses={charPoses}>
                      Providing a launchpad to build for the next Billion Users.
                    </SplitText>
                  </Head>
                </Sidebar>

                <Flex justifyCenter>
                  <Button> Get Started </Button>
                </Flex>
              </div>
            </Flex>
            <br />
          </Div>
        </div>
      ) : (
        <div>
          <Div>
            <div style={{ textAlign: "center" }}>
              <Image />
            </div>
            <div style={{ paddingTop: "5%", textAlign: "center" }}>
              <Quote />
              <Sidebar initialPose="exit" pose="enter">
                <Head style={{ marginLeft: "10%" }}>
                  <SplitText charPoses={charPoses}>
                    Providing a launchpad to build for the next Billion Users.
                  </SplitText>
                </Head>
              </Sidebar>{" "}
              <Flex justifyCenter>
                <Button> Get Started </Button>
              </Flex>
            </div>{" "}
            <br /> <br />
          </Div>
        </div>
      )}

      <Sponsors />
    </>
  );
};

export default Home;
