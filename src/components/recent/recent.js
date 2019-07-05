import React from "react";
import Flex from "styled-flex-component";
import { Travoi } from "./products/";
import posed from "react-pose";
import styled from "styled-components";

export default function home() {
  const Hover = posed.div({
    hoverable: true,
    init: {
      scale: 1
    },
    hover: {
      scale: 1.05
    },
    press: {
      scale: 1.1
    }
  });

  const Image = styled.a`
    &:hover {
      cursor: pointer;
    }
  `;

  const Button = styled(Hover)`
    background: #0748a8;
    text-align: center;
    border-radius: 3px;
    border: 0.5px solid palevioletred;
    color: white;
    margin: 0 1em;
    padding: 0.7em 2em;
    font-size: 0.95em;
  `;

  return (
    <div style={{ textAlign: "center" }}>
      <h3> Join the increasing number </h3>
      <Flex justifyAround>
        <div>
          <Hover>
            <Image>
              <Travoi style={{ maxWidth: "45%" }} />
            </Image>
          </Hover>
        </div>
        <div>
          <Hover>
            <Image>
              <Travoi style={{ maxWidth: "45%" }} />
            </Image>
          </Hover>
        </div>
        <div>
          <Hover>
            <Image>
              <Travoi style={{ maxWidth: "45%" }} />
            </Image>
          </Hover>
        </div>
      </Flex>
      <Flex justifyCenter>
        <Button> Explore </Button>
      </Flex>
    </div>
  );
}
