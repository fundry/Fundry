import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import Flex from "styled-flex-component";
import { Grid, Icon } from "semantic-ui-react";

const Title = styled.p`
font-weight : bold
font-size : 1.3em
text-align : right
padding-right : 5%
padding-top : 1%
`;

const Text = styled.p`
  text-align :  center
  padding-top : 5% 
  font-size : 1.2em
`;

const Contain = styled.div`
  text-align: center;
`;

export default function home() {
  return (
    <Flex justifyCenter>
      <Card
        className="shadow p-3 mb-5 bg-white rounded"
        style={{
          paddingLeft: "5%",
          paddingRight: "5%",
          paddingTop: "3%",
          paddingBottom: "23%",
          width: "65%",
          color: "#0e2f5a"
        }}
      >
        <Grid stackable columns="equal">
          <Grid.Row columns="3">
            <Grid.Column>
              <Contain>
                <Icon name="facebook" size="big" />
                <Text>
                  {" "}
                  <strong> Review </strong> your Idea{" "}
                </Text>
              </Contain>
            </Grid.Column>
            <Grid.Column>
              <Contain>
                <Icon name="facebook" size="big" />
                <Text> Optimize your Idea </Text>
              </Contain>
            </Grid.Column>
            <Grid.Column>
              <Contain>
                <Icon name="facebook" size="big" />
                <Text> Build your Legal Structure </Text>
              </Contain>
            </Grid.Column>{" "}
            <br /> <br /> <br />
            <br /> <br /> <br />
            <Grid.Column>
              <Contain>
                <Icon name="facebook" size="big" />
                <Text> Develop your Idea </Text>
              </Contain>
            </Grid.Column>{" "}
            <Grid.Column>
              <Contain>
                <Icon name="facebook" size="big" />
                <Text> Develop your Idea </Text>
              </Contain>
            </Grid.Column>
            <Grid.Column>
              <Contain>
                <Icon name="facebook" size="big" />
                <Text> Raise funds for your service </Text>
              </Contain>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card>
    </Flex>
  );
}
