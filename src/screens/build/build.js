import React from "react";
import Flex from "styled-flex-component";
import styled from "styled-components";
import { ReactComponent as Tools } from "./tools.svg";
import useWindowWidth from "../../hook_style";

const Build = () => {
  const Div = styled.div`
    background: linear-gradient(to top, #2b44ff, #0091ff);
  `;

  const hooks = useWindowWidth();
  return (
    <Div>
      <div
        style={{
          padding: "1em",
          paddingTop: "5%",
          color: "#0e2f5a "
        }}
      >
        {hooks >= 650 ? (
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
        ) : (
          <div style={{ padding: "1em" }}>
            <div
              style={{
                paddingLeft: "2em",
                paddingTop: "5em",
                textAlign: "right"
              }}
            >
              <h2 style={{ color: "#fff" }}>
                <b>Funded </b> <br /> Development Process
              </h2>
              <p style={{ color: "#fff" }}>
                Build whatever you want with our engineers bla bla{" "}
              </p>
            </div>
            <br />
            <br />
            <div>
              <Tools style={{ marginRight: "2em" }} />
            </div>{" "}
          </div>
        )}
      </div>
    </Div>
  );
};
export default Build;
