import React from "react";
import styled from "styled-components";

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
    <Div>
      <Title> RELEASES </Title>
      <Text> No Recent Projects Yet </Text>
    </Div>
  );
}
