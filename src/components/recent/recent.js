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

  const Button = styled.a`
    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <div style={{ textAlign: "center" }}>
      <Flex justifyAround>
        <div>
          <Hover>
            <Button>
              <Travoi style={{ maxWidth: "45%" }} />
            </Button>
          </Hover>
        </div>
        <div>
          <Hover>
            <Button>
              <Travoi style={{ maxWidth: "45%" }} />
            </Button>
          </Hover>
        </div>
        <div>
          <Hover>
            <Button>
              <Travoi style={{ maxWidth: "45%" }} />
            </Button>
          </Hover>{" "}
        </div>
      </Flex>
    </div>
  );
}
