import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { Grid } from "semantic-ui-react";
import { ReactComponent as Rocket } from "./svg/rocket.svg";
import { ReactComponent as Legal } from "./svg/legal.svg";
import { ReactComponent as Develop } from "./svg/develop.svg";

const Text = styled.p`
  text-align :  center
  padding-top : 5% 
  font-size : 1.2em
`;

const Contain = styled.div`
  text-align: center;
`;

const Card = styled.div`
  background: #fbfbfb;
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
          width: "80%",
          color: "#0e2f5a"
        }}
      >
        <Grid>
          <Grid.Row columns="3">
            <Grid.Column>
              <Contain>
                <Rocket style={{ maxHeight: "15vh", Bottom: 0 }} />
                <Text>
                  <strong> Review </strong>
                </Text>
              </Contain>
            </Grid.Column>
            <Grid.Column>
              <Contain>
                <Rocket style={{ maxHeight: "15vh", Bottom: 0 }} />
                <Text>
                  <strong> Optimize </strong>
                </Text>
              </Contain>
            </Grid.Column>
            <Grid.Column>
              <Contain>
                <Legal style={{ maxHeight: "15vh", Bottom: 0 }} />
                <Text>Legal Structure</Text>
              </Contain>
            </Grid.Column>{" "}
            <br /> <br /> <br />
            <br /> <br /> <br />
            <Grid.Column>
              <Contain>
                <Develop style={{ maxHeight: "15vh", Bottom: 0 }} />
                <Text>
                  {" "}
                  <strong> Build </strong>
                </Text>
              </Contain>
            </Grid.Column>
            <Grid.Column>
              <Contain>
                <Rocket style={{ maxHeight: "15vh", Bottom: 0 }} />
                <Text> Develop </Text>
              </Contain>
            </Grid.Column>
            <Grid.Column>
              <Contain>
                <Rocket style={{ maxHeight: "15vh", Bottom: 0 }} />
                <Text> Funds</Text>
              </Contain>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card>
    </Flex>
  );
}
