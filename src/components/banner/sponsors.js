import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";

// remove height property later to increase responsivness ...
const Card = styled.div`
  width: 100%;
`;

const Text = styled.p`
  text-align: center;
`;

export default function home() {
  return (
    <Card className="shadow-lg p-3 mb-5 bg-red rounded">
      <Flex>
        <Text> tests </Text>
      </Flex>
    </Card>
  );
}
