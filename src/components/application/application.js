import React from "react";
import styled from "styled-components";
import Footer from "../footer/footer";
import Header from "../banner/header";

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
`;

const Text = styled.h4`
  text-align :  center
  padding-top : 5% 
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

export default function home() {
  return (
    <>
      <Header />

      <Div>
        <Title> PROJECTS </Title>
        <Text> APPLICATION PAGE</Text>

        <Button> Create Application </Button>
        <Button> Download Sample Form </Button>
        <Footer showFeedback={false} />
      </Div>
    </>
  );
}
