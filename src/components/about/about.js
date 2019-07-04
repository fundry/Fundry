import React from "react";
import styled from "styled-components";
import Operation from "./operation/operation";
import Uses from "./uses";
import { Grid } from "semantic-ui-react";
import { ReactComponent as Bulb } from "./svg/top.svg";
import { ReactComponent as Bottom } from "./svg/bottom.svg";
import Flex from "styled-flex-component";
import useWindowWidth from "../hook_style";
import posed from "react-pose";
import Build from "../build/build";

const Div = styled.div`
  width: 100%
  background: transparent
`;

const Contain = styled.div`
  margin-left: 3%
  margin-right: 3%
  font-size: 1.2em
  color : #022b69
`;

const Head = styled.h3`
color : #022b69
font-weight: bold 
text-align: center 
font-family: comic sans ms
`;

const Text = styled.p`
padding-top: 2% 
text-align  : center
`;

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    paddingTop: "15px",
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    background: "#0748a8",
    textAlign: "center",
    borderRadius: "5px",
    height: "37px",
    border: " 1px solid #f9db93 ",
    color: "white",
    margin: " 0 1em ",
    padding: " 0.25em 1em",
    fontSize: "0.95em"
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
  border: 0.5px solid palevioletred;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 0.95em;
`;

const About = () => {
  const hooks = useWindowWidth();

  return (
    <Div>
      {hooks >= 600 ? (
        <Contain>
          <Flex justifyCenter>
            <div>
              <Head> Turning Rough Ideas Into Products </Head>

              <Text style={{ width: "70%" }}>
                Fundry is a program developed to hm4bjfeb j4hgfjbhgek
                rh4kgegb,ekkgt jkvbwhjwgkkfjk ydkv wdkwyd gwdw nbhkeb .
              </Text>

              <div style={{ float: "right" }}>
                <Button> Start Application </Button>
              </div>
            </div>
          </Flex>
          <br /> <br />
          <br /> <br />
          <Flex>
            <div style={{}}>
              <h3>
                <b>Structure </b> <br /> Your Idea{" "}
              </h3>
              <p>
                Meeet with our engineers and structure your idea bla bla bla{" "}
              </p>
            </div>

            <Bottom />
          </Flex>
        </Contain>
      ) : (
        <Contain>
          <Grid stackable columns="equal">
            <Grid.Row>
              <Grid.Column>
                <Flex justifyCenter>
                  <Bulb style={{ height: "20vh", width: "50%" }} />
                </Flex>
              </Grid.Column>

              <Grid.Column>
                <Text>
                  Fundry is a program developed to hm4bjfeb j4hgfjbhgek
                  rh4kgegb,ekkgt jkvbwhjwgkkfjk ydkv wdkwyd gwdw nbhkeb 3f3ffe
                  dwdwdw dwdx w222e e2rr a 22e 2 1e2cs 4r4ede 4t5rvdwd 3rd33
                  4t4efed 3r3 e23e3r e2e2
                </Text>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Contain>
      )}

      <br />
      <div>
        <Uses />
        <Operation />
        <Build />
      </div>
    </Div>
  );
};
export default About;
