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
  font-size : 1.3em
`;

const Head = styled.h4`
text-align :  center
padding-top : 2% 
padding-bottom : 2% 
`;

const Contain = styled.div`
  text-align: center;
`;

const Card = styled.div`
  background: #18379a;
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
        <Head> Build , Scale and Develop your rough Idea. </Head>
        <Grid>
          <Grid.Row columns="3">
            <Grid.Column>
              <Contain>
                <Rocket style={{ maxHeight: "20vh", Bottom: 0 }} />
                <Flex column>
                  <Text>
                    <strong> Review </strong>
                  </Text>

                  <p>
                    {" "}
                    Get an immediate review on your idea from our team members{" "}
                  </p>
                </Flex>
              </Contain>
            </Grid.Column>
            <Grid.Column>
              <Contain>
                <Rocket style={{ maxHeight: "20vh", Bottom: 0 }} />
                <Flex column>
                  <Text>
                    <strong> Refactor </strong>
                  </Text>

                  <p>
                    {" "}
                    Recieve ways to restructure and optimize your idea based on
                    previous review{" "}
                  </p>
                </Flex>
              </Contain>
            </Grid.Column>
            <Grid.Column>
              <Contain>
                <Legal style={{ maxHeight: "15vh", Bottom: 0 }} />
                <Flex column>
                  <Text>
                    <strong> Build </strong>
                  </Text>

                  <p>
                    {" "}
                    Begin the actual development and implementation of your
                    idea.{" "}
                  </p>
                </Flex>
              </Contain>
            </Grid.Column>{" "}
            <br /> <br /> <br />
          </Grid.Row>
        </Grid>
      </Card>
    </Flex>
  );
}
