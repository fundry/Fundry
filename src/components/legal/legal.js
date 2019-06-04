import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import { Grid, Icon } from "semantic-ui-react";
import Img from "react-image";

const Div = styled.div`
  margin-top : 5%
  width: 100%
  background: #f2f5ff
  padding-top : 3%
  padding-bottom : 3%
  padding-right : 2%
  padding-left : 2%
  color : #022b68
`;

const Title = styled.p`
font-weight : bold
font-size : 1.3em
text-align : right
padding-right : 5%
`;

export default function home() {
  return (
    <Div>
      <Title> LEGAL TEAM </Title>

      <Grid stackable celled="internally" columns="equal">
        <Grid.Row>
          <Grid.Column>
            <Card>
              <Img
                src={
                  "https://res.cloudinary.com/dkfptto8m/image/upload/v1559072247/my_avatar.png"
                }
                loader={<img src={require("../../images/developer.png")} />}
                unloader={<h1> NOT LOADED </h1>}
              />
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card>
              <Img
                src={
                  "https://res.cloudinary.com/dkfptto8m/image/upload/v1559072247/my_avatar.png"
                }
                loader={<img src={require("../../images/developer.png")} />}
                unloader={<h1> NOT LOADED </h1>}
              />
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card>
              <Img
                src={
                  "https://res.cloudinary.com/dkfptto8m/image/upload/v1559072247/my_avatar.png"
                }
                loader={<img src={require("../../images/developer.png")} />}
                unloader={<h1> NOT LOADED </h1>}
              />
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Div>
  );
}
