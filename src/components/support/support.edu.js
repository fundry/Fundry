import React from "react";
import Flex from "styled-flex-component";
import styled from "styled-components";

const Build = () => {
  const Div = styled.div`
    background: #0e2f5a;
  `;

  return (
    <Div>
      <div
        style={{
          padding: "1em",
          paddingTop: "1%",
          paddingBottom: "25%",
          color: "#0e2f5a "
        }}
      >
        <div
          style={{
            paddingLeft: "2em",
            textAlign: "center",
            paddingTop: "5em"
          }}
        >
          <Flex justifyCenter>
            <h2 style={{ color: "#fff", paddingRight: "5px" }}>
              <b>Learn </b>
            </h2>
            <h2 style={{ color: "#F47602" }}>on the Process</h2>
          </Flex>
          <h5 style={{ color: "#fff" }}>
            Workshops are provided during the build phase by patner engineering
            teams
          </h5>
        </div>

        <Flex justifyBetween>
          <div>
            <h1> a</h1>
          </div>
        </Flex>
      </div>
    </Div>
  );
};
export default Build;
