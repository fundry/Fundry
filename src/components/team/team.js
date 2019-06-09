import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import { Grid, Icon } from "semantic-ui-react";
import Img from "react-image";
import { Link } from "react-router-dom";
import Flex from "styled-flex-component";
import { media } from "../media_style";

const Div = styled.div`
  margin-top : 3%
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

const Name = styled.p`
  text-align : center
  font-size : 1em
  font-weight : bold
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
  styledCard
  padding-bottom:  10px 
	&:hover {
    color: #0e2f5a;
    background: #fff;
  }
`;

const autoGrid = (minColumnWidth = 150, gridGap = 0) => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
  gridGap
});

const Gallery = styled.div({
  ...autoGrid(230, 10),
  padding: "20px"
});

const Image = styled.img({
  width: "100%",
  borderRadius: 10,
  boxShadow: "1px 1px 5px rgba(0,0,0,0.3)"
});

export default function home() {
  const randomImages = Array.from({ length: 100 });

  return (
    <Div>
      <Title> TEAM </Title>

      <Gallery>
        <Card
          style={{
            borderRadius: "10px",
            paddingBottom: "20px",
            paddingTop: "20px"
          }}
        >
          <Flex justifyCenter>
            <Img
              rounded
              style={{
                width: "15rem",
                borderRadius: "10rem",
                height: "35vh"
              }}
              src={
                "https://res.cloudinary.com/dkfptto8m/image/upload/v1559072247/my_avatar.png"
              }
              loader={
                <img
                  alt=" member "
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
            Anybody A. Anybody <br /> <Position> Legal head </Position>
          </Name>

          <Flex justifyCenter>
            <Icon name="facebook" size="big" color="blue" />
            <Icon name="twitter" size="big" color="blue" />
            <Icon name="instagram" size="big" color="red" />
          </Flex>
        </Card>

        <Card
          style={{
            borderRadius: "10px",
            paddingBottom: "20px",
            paddingTop: "20px"
          }}
        >
          <Flex justifyCenter>
            <Img
              rounded
              style={{
                width: "15rem",
                borderRadius: "10rem",
                height: "35vh"
              }}
              src={
                "https://res.cloudinary.com/dkfptto8m/image/upload/v1559072247/my_avatar.png"
              }
              loader={
                <img
                  alt=" member "
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
            Anybody A. Anybody <br /> <Position> Legal head </Position>
          </Name>

          <Flex justifyCenter>
            <Icon name="facebook" size="big" color="blue" />
            <Icon name="twitter" size="big" color="blue" />
            <Icon name="instagram" size="big" color="red" />
          </Flex>
        </Card>

        <Card
          style={{
            borderRadius: "10px",
            paddingBottom: "20px",
            paddingTop: "20px"
          }}
        >
          <Flex justifyCenter>
            <Img
              rounded
              style={{
                width: "15rem",
                borderRadius: "10rem",
                height: "35vh"
              }}
              src={
                "https://res.cloudinary.com/dkfptto8m/image/upload/v1559072247/my_avatar.png"
              }
              loader={
                <img
                  alt=" member "
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
            Anybody A. Anybody <br /> <Position> Legal head </Position>
          </Name>

          <Flex justifyCenter>
            <Icon name="facebook" size="big" color="blue" />
            <Icon name="twitter" size="big" color="blue" />
            <Icon name="instagram" size="big" color="red" />
          </Flex>
        </Card>

        <Card
          style={{
            borderRadius: "10px",
            paddingBottom: "20px",
            paddingTop: "20px"
          }}
        >
          <Flex justifyCenter>
            <Img
              rounded
              style={{
                width: "15rem",
                borderRadius: "10rem",
                height: "35vh"
              }}
              src={
                "https://res.cloudinary.com/dkfptto8m/image/upload/v1559072247/my_avatar.png"
              }
              loader={
                <img
                  alt=" member "
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
            Anybody A. Anybody <br /> <Position> Legal head </Position>
          </Name>

          <Flex justifyCenter>
            <Icon name="facebook" size="big" color="blue" />
            <Icon name="twitter" size="big" color="blue" />
            <Icon name="instagram" size="big" color="red" />
          </Flex>
        </Card>
      </Gallery>

      <Link to="./legal">
        <div style={{ textAlign: "right", paddingRight: "20px" }}>
          <Button> Full Team </Button>
        </div>
      </Link>
    </Div>
  );
}
