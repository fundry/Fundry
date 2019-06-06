import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import Flex from "styled-flex-component";
import { Grid } from "semantic-ui-react";

const Div = styled.div`
  width: 100%
  background: #f2f5ff
  height : 20vh
`;

const Title = styled.p`
font-weight : bold
font-size : 1.3em
text-align : right
padding-right : 5%
padding-top : 1%
`;

const Text = styled.h4`
  text-align :  center
  padding-top : 5% 
`;

export default function home() {
  return (
    <Card
      style={{
        paddingLeft: "2.5%",
        paddingRight: "2.5%",
        paddingTop: "2.5%",
        paddingBottom: "2.5%"
      }}
    >
      <Grid stackable columns="equal">
        <Grid.Row>
          <Grid.Column>
            <Text> Create Application </Text>
            <Text> Create Application </Text>
          </Grid.Column>
          <Grid.Column>
            <Text> Begin Development </Text>
            <Text> Begin Development </Text>
          </Grid.Column>{" "}
        </Grid.Row>
      </Grid>
    </Card>
  );
}
