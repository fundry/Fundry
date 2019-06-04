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

const Text = styled.p`
  text-align: center;
`;

const Name = styled.p`
  text-align : center
  font-size : 1.3em
  font-weight : bold
  padding-top : 10px
`;

export default function home() {
  return (
    <Div>
      <Title> LEGAL TEAM </Title>

      <Grid stackable celled="internally" columns="equal">
        <Grid.Row>
          <Grid.Column>
            <Card style={{ borderRadius: "10px", paddingBottom: "20px" }}>
              <Img
                src={
                  "https://res.cloudinary.com/dkfptto8m/image/upload/v1559072247/my_avatar.png"
                }
                loader={<img src={require("../../images/developer.png")} />}
                unloader={<h1> NOT LOADED </h1>}
              />

              <Name> Anybody A. Anybody</Name>
              <Text>
                {" "}
                Consultant at a j.hnnrjrefhey mhgfefdbc, fbrefebse kjr,rbfmb
                jshkef,hewv rrukgrbkrjgerfef lhjrugrghegffsvfgf fgrtgr gfgrg rgr
                rgrgrvrdefefdf{" "}
              </Text>
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card style={{ borderRadius: "10px", paddingBottom: "20px" }}>
              <Img
                src={
                  "https://res.cloudinary.com/dkfptto8m/image/upload/v1559072247/my_avatar.png"
                }
                loader={<img src={require("../../images/developer.png")} />}
                unloader={<h1> NOT LOADED </h1>}
              />

              <Name> Anybody A. Anybody</Name>
              <Text>
                {" "}
                Consultant at a j.hnnrjrefhey mhgfefdbc, fbrefebse kjr,rbfmb
                jshkef,hewv rrukgrbkrjgerfef lhjrugrghegffsvfgf fgrtgr gfgrg rgr
                rgrgrvrdefefdf{" "}
              </Text>
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card style={{ borderRadius: "10px", paddingBottom: "20px" }}>
              <Img
                src={
                  "https://res.cloudinary.com/dkfptto8m/image/upload/v1559072247/my_avatar.png"
                }
                loader={<img src={require("../../images/developer.png")} />}
                unloader={<h1> NOT LOADED </h1>}
              />

              <Name> Anybody A. Anybody</Name>
              <Text>
                {" "}
                Consultant at a j.hnnrjrefhey mhgfefdbc, fbrefebse kjr,rbfmb
                jshkef,hewv rrukgrbkrjgerfef lhjrugrghegffsvfgf fgrtgr gfgrg rgr
                rgrgrvrdefefdf{" "}
              </Text>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Div>
  );
}
