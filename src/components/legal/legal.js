import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

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
font-size : 1em
text-align : center
`;

export default function home() {
  return (
    <Div>
      <Title> LEGAL TEAM </Title>

      <div>
        <Card />
      </div>
    </Div>
  );
}
