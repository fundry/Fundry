import React from "react";
import Flex from "styled-flex-component";
import { Travoi } from "./products/";

export default function home() {
  return (
    <Flex justifyCenter>
      <Flex justifyAround>
        <Travoi style={{ maxWidth: "15%" }} />
        <Travoi style={{ maxWidth: "15%" }} />
        <Travoi style={{ maxWidth: "15%" }} />
      </Flex>
    </Flex>
  );
}
