import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Customer, Form, Dev } from "./svg/index";
import { Grid } from "semantic-ui-react";

const Div = styled.div`
  width: 95%
  margin-left: 2%
  margin-right: 2%
  background: #f4f8fc
  padding-top: 3%
  padding-bottom: 5%
`;

const buttonContain = styled.div`
  margin-top: 4%;
  margin-right: 5%;
  text-align: right;
`;

const Button = styled.button`
  background: #0e2f5a;
  text-align: right;
  border-radius: 4px;
  height: 35px;
  border: 1px solid #0e2f5a;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 1em;
  &:hover {
    color: #0e2f5a;
    background: #fff;
  }
`;

const Header = styled.p`
  color : #0748a8
  text-align: right
  padding-right: 5%
  font-size: 1.3em
  font-weight : bold
`;

const Contain = styled.div`
  margin-left: 3%
  margin-right: 3%
`;

const Text = styled.p``;

export default function home() {
  return (
    <Div>
      <Header> GET STARTED </Header>

      <Contain>
        <Grid stackable columns="equal">
          <Grid.Row>
            <Grid.Column>
              <img src={Form} />
              <Text> Create Application </Text>
            </Grid.Column>
            <Grid.Column>
              <img src={Customer} />
              <Text> Interact </Text>
            </Grid.Column>{" "}
            <Grid.Column>
              <img src={Dev} />
              <Text> Begin Development </Text>
            </Grid.Column>{" "}
          </Grid.Row>
        </Grid>
      </Contain>

      <Link to="./application">
        <div style={{ float: "right" }}>
          <Button> Begin Process </Button>
        </div>
      </Link>
    </Div>
  );
}
