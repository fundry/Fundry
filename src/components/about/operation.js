import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 95%
  margin-left: 2%
  margin-right: 2%
  background: #f4f8fc
  padding-top: 3%
  padding-bottom: 5%
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
        <Text> HOW FUNDRY WORKS </Text>
      </Contain>
    </Div>
  );
}
