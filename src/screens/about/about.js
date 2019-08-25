import React from "react";
import styled from "styled-components";
import Operation from "./operation/operation";
import Uses from "./uses";
import { Grid } from "semantic-ui-react";
import { ReactComponent as Bulb } from "./svg/top.svg";
import { ReactComponent as Bottom } from "./svg/bottom.svg";
import Flex from "styled-flex-component";
import useWindowWidth from "../../hook_style";
import Build from "../build/build";
import Releases from "../recent/recent";
import Support from "../support/support.edu";

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

const About = () => {
  const hooks = useWindowWidth();

  return (
    <Div>
      {hooks >= 600 ? (
        <Contain>
          <Flex justifyCenter>
            <div>
              <Head> Turning Rough Ideas Into Products </Head>

              <Text style={{ marginLeft: "2em", marginRight: "2em" }}>
                Fundry is a program developed to hm4bjfeb j4hgfjbhgek
                rh4kgegb,ekkgt jkvbwhjwgkkfjk ydkv wdkwyd gwdw nbhkeb .
              </Text>
            </div>
          </Flex>
          <br /> <br /> <br />
          <Flex justifyCenter>
            <div style={{ paddingTop: "5%", padding: "2em" }}>
              <h3>
                <b> Define </b> <br /> Your Roadmap !{" "}
              </h3>
              <p>
                Meeet with our engineers and structure your idea bla bla bla{" "}
              </p>
            </div>

            <Bottom style={{ maxWidth: "50%" }} />
          </Flex>
          <div>
            <Releases />
          </div>
        </Contain>
      ) : (
        <Contain>
          <Flex justifyCenter>
            <Bulb style={{ height: "20vh", width: "50%" }} />
          </Flex>

          <Text>
            Fundry is a program developed to hm4bjfeb j4hgfjbhgek rh4kgegb,ekkgt
            jkvbwhjwgkkfjk ydkv wdkwyd gwdw nbhkeb 3f3ffe dwdwdw dwdx w222e e2rr
            a 22e 2 1e2cs 4r4ede 4t5rvdwd 3rd33 4t4efed 3r3 e23e3r e2e2
          </Text>
        </Contain>
      )}
      <br />
      <div>
        <Uses />
        <Build />
        <Support />
        <br />
      </div>
    </Div>
  );
};
export default About;
