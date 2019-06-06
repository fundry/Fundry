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
        style={{
          paddingLeft: "2.5%",
          paddingRight: "2.5%",
          paddingTop: "2.5%",
          paddingBottom: "2.5%",
          width: "65%"
        }}
      >
        <Grid stackable columns="equal">
          <Grid.Row columns="2">
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
                <Text> Review your Idea </Text>
              </Contain>
            </Grid.Column>{" "}
            <br /> <br /> <br />
            <br /> <br /> <br />
            <Grid.Column>
              <Contain>
                <Icon name="facebook" size="big" />
                <Text> Review your Idea </Text>
              </Contain>
            </Grid.Column>
            <Grid.Column>
              <Contain>
                <Icon name="facebook" size="big" />
                <Text> Review your Idea </Text>
              </Contain>
            </Grid.Column>
            <Grid.Column>
              <Contain>
                <Icon name="facebook" size="big" />
                <Text> Review your Idea </Text>
              </Contain>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card>
    </Flex>
  );
}
