import React from "react";
import Flex from "styled-flex-component";
import styled from "styled-components";
import { ReactComponent as Tools } from "./tools.svg";

const Build = () => {
  const Image = {
    width: "35%",
    borderRadius: 70,
    boxShadow: "1px 1px 5px rgba(0,0,0,0.3)",
    top: "15%",
    textAlign: "center"
  };

  const Div = styled.div`
    background: linear-gradient(to top, #2b44ff, #0091ff);
  `;

  return (
    <Div>
      <div
        style={{
          padding: "1em",
          paddingTop: "5%",
          color: "#0e2f5a "
        }}
      >
        <Flex justifyBetween>
          <div style={{ paddingLeft: "2em", paddingTop: "5em" }}>
            <h2 style={{ color: "#fff" }}>
              <b>Funded </b> <br /> Development Process
            </h2>
            <p style={{ color: "#fff" }}>
              Build whatever you want with our engineers bla bla{" "}
            </p>
          </div>

          <div>
            <Tools style={{ marginRight: "2em" }} />
          </div>
        </Flex>
      </div>
    </Div>
  );
};
export default Build;
