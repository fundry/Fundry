import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import { Grid, Icon } from "semantic-ui-react";
import Img from "react-image";
import { Link } from "react-router-dom";
import Flex from "styled-flex-component";

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
  width: 60%;
`;

const Name = styled.p`
  text-align : center
  font-size : 1.3em
  font-weight : bold
  padding-top : 10px
`;
const Position = styled.p`
  text-align : center
  font-size : 0.85em
  font-weight : bold
`;

const buttonContain = styled.div`
  margin-top: 4%;
  margin-right: 5%;
  text-align: center;
`;

const Button = styled.button`
  background: #0e2f5a;
  text-align: center;
  border-radius: 4px;
  height: 35px;
  border: 1px solid #0e2f5a;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 1em;
  padding-bottom:  10px 
	&:hover {
    color: #0e2f5a;
    background: #fff;
  }
`;

export default function home() {
  return (
    <Div>
      <Title> TEAM </Title>

      <Grid stackable celled="internally" columns="equal">
        <Grid.Row>
          <Grid.Column>
            <Flex justifyCenter>
              <Card
                className="shadow-sm p-3 mb-5 bg-white rounded"
                style={{
                  borderRadius: "10px",
                  paddingBottom: "20px",
                  paddingTop: "20px",
                  maxWidth: "77%"
                }}
              >
                <Flex justifyCenter>
                  <Img
                    style={{
                      width: "11rem",
                      borderRadius: "10rem",
                      height: "17vh"
                    }}
                    src={
                      "https://res.cloudinary.com/dkfptto8m/image/upload/v1559072247/my_avatar.png"
                    }
                    loader={
                      <img
                        style={{
                          width: "15rem",
                          borderRadius: "10rem",
                          height: "25vh"
                        }}
                        src={require("../../images/developer.png")}
                      />
                    }
                    unloader={<h1> NOT LOADED </h1>}
                  />
                </Flex>

                <Name>
                  Anybody A. Anybody <br />{" "}
                  <Position className="font-italic"> Legal head </Position>
                </Name>

                <Flex justifyCenter>
                  <Text>
                    {" "}
                    Consultant at a j.hnnrjrefhey mhgfefdbc, fbrefebse kjr,rbfmb
                    jshkef,hewv rrukgrbkrjgerfef lhjrugrghegffsvfgf fgrtgr gfgrg
                    rgr rgrgrvrdefefdf{" "}
                  </Text>
                </Flex>
              </Card>
            </Flex>
          </Grid.Column>

          <Grid.Column>
            <Flex justifyCenter>
              <Card
                className="shadow-sm p-3 mb-5 bg-white rounded"
                style={{
                  borderRadius: "10px",
                  paddingBottom: "20px",
                  paddingTop: "20px",
                  maxWidth: "77%"
                }}
              >
                <Flex justifyCenter>
                  <Img
                    style={{
                      width: "11rem",
                      borderRadius: "10rem",
                      height: "17vh"
                    }}
                    src={
                      "https://res.cloudinary.com/dkfptto8m/image/upload/v1559072247/my_avatar.png"
                    }
                    loader={
                      <img
                        style={{
                          width: "15rem",
                          borderRadius: "10rem",
                          height: "25vh"
                        }}
                        src={require("../../images/developer.png")}
                      />
                    }
                    unloader={<h1> NOT LOADED </h1>}
                  />
                </Flex>

                <Name>
                  Anybody A. Anybody <br />{" "}
                  <Position className="font-italic"> Legal head </Position>
                </Name>

                <Flex justifyCenter>
                  <Text>
                    {" "}
                    Consultant at a j.hnnrjrefhey mhgfefdbc, fbrefebse kjr,rbfmb
                    jshkef,hewv rrukgrbkrjgerfef lhjrugrghegffsvfgf fgrtgr gfgrg
                    rgr rgrgrvrdefefdf{" "}
                  </Text>
                </Flex>
              </Card>
            </Flex>
          </Grid.Column>

          <Grid.Column>
            <Flex justifyCenter>
              <Card
                className="shadow-sm p-3 mb-5 bg-white rounded"
                style={{
                  borderRadius: "10px",
                  paddingBottom: "20px",
                  paddingTop: "20px",
                  maxWidth: "77%"
                }}
              >
                <Flex justifyCenter>
                  <Img
                    style={{
                      width: "11rem",
                      borderRadius: "10rem",
                      height: "17vh"
                    }}
                    src={
                      "https://res.cloudinary.com/dkfptto8m/image/upload/v1559072247/my_avatar.png"
                    }
                    loader={
                      <img
                        style={{
                          width: "15rem",
                          borderRadius: "10rem",
                          height: "25vh"
                        }}
                        src={require("../../images/developer.png")}
                      />
                    }
                    unloader={<h1> NOT LOADED </h1>}
                  />
                </Flex>

                <Name>
                  Anybody A. Anybody <br />{" "}
                  <Position className="font-italic"> Legal head </Position>
                </Name>

                <Flex justifyCenter>
                  <Text>
                    {" "}
                    Consultant at a j.hnnrjrefhey mhgfefdbc, fbrefebse kjr,rbfmb
                    jshkef,hewv rrukgrbkrjgerfef lhjrugrghegffsvfgf fgrtgr gfgrg
                    rgr rgrgrvrdefefdf{" "}
                  </Text>
                </Flex>
              </Card>
            </Flex>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Link to="./legal">
        <div style={{ textAlign: "right", paddingRight: "20px" }}>
          <Button> See More </Button>
        </div>
      </Link>
    </Div>
  );
}
