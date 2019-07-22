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

  return (
    <div style={{ textAlign: "center", paddingTop: "7%" }}>
      <h4> Join the increasing number </h4>
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
    </div>
  );
}
