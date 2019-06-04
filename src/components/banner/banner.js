import React from "react";
import styled from "styled-components";

// remove height property later to increase responsivness ...
const Div = styled.div`
  width: 100%
  height : 50vh
  background: blue
`;

export default function home() {
  return (
    <Div>
      <h1> BANNER HERE </h1>
    </Div>
  );
}
