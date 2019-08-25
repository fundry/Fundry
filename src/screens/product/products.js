import React from "react";
import Flex from "styled-flex-component";
import { Travoi } from "./svg";
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

  const Head = styled.h3`
    text-align : right
    padding-right : 25px
  `;

  const IconBody = styled.div`
    text-align: center;
  `;

  return (
    <div style={{ paddingTop: "3em", paddingRight: "20px" }}>
      <Head> Opensource Products </Head>
      <IconBody>
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
      </IconBody>
    </div>
  );
}
