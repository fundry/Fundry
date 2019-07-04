import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { ReactComponent as Firms } from "./support.edu.svg";

const Text = styled.p`
  text-align: center;
`;

export default function home() {
  return (
    <div>
      <Flex>
        <Firms />
        <div>
          <Text> List of supporting firms && companies </Text>{" "}
        </div>
      </Flex>
    </div>
  );
}
