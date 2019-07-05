import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { ReactComponent as Rocket } from "./svg/rocket.svg";
import { ReactComponent as Legal } from "./svg/legal.svg";
import { ReactComponent as Develop } from "./svg/develop.svg";

const Text = styled.p`
  text-align :  center
  padding-top : 5% 
  font-size : 1.3em
`;

const Head = styled.h3`
text-align :  center
padding-top : 2% 
padding-bottom : 2% 
`;
// 18379a
const Contain = styled.div`
  text-align: center;
`;
// 2B44FF
const Card = styled.div`
  background: linear-gradient(to bottom, #2b44ff, #0091ff);
`;

export default function home() {
  return (
    <Flex justifyCenter>
      <Card
        style={{
          paddingLeft: "5%",
          paddingRight: "5%",
          paddingTop: "3%",
          paddingBottom: "5%",
          width: "100%",
          color: "#FFF"
        }}
      >
        <Head> Define , Build and Fund your rough Idea. </Head>
        <Flex justifyAround>
          <Contain>
            <Rocket style={{ maxHeight: "20vh", Bottom: 0 }} />
            <div>
              <Text>
                <strong> Review </strong>
              </Text>
            </div>
          </Contain>

          <Contain>
            <Rocket style={{ maxHeight: "20vh", Bottom: 0 }} />
            <div style={{ width: "20%" }}>
              <Text>
                <strong> Refactor </strong>
              </Text>
            </div>
          </Contain>

          <Contain>
            <Legal style={{ maxHeight: "20vh", Bottom: 0 }} />
            <div style={{ width: "20%" }}>
              <Text>
                <strong> Build </strong>
              </Text>
            </div>
          </Contain>
        </Flex>{" "}
        <br />
      </Card>
    </Flex>
  );
}
