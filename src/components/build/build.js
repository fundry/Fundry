import React from "react";
import Flex from "styled-flex-component";
import styled from "styled-components";
import Img from "react-image";

const Build = () => {
  const Image = {
    width: "35%",
    borderRadius: 70,
    boxShadow: "1px 1px 5px rgba(0,0,0,0.3)",
    top: "15%",
    textAlign: "center"
  };

  return (
    <div
      style={{
        padding: "1em",
        paddingTop: "5%",
        backgroundColor: "#f2f5ff",
        color: "#0e2f5a "
      }}
    >
      <Flex justifyBetween>
        <div style={{}}>
          <h3>
            <b>Leverage </b> <br /> Our Expertise
          </h3>
          <p> Build whatever you want with our engineers bla bla </p>
        </div>

        <div>
          <Img
            style={Image}
            src={
              "https://res.cloudinary.com/dkfptto8m/image/upload/v1559072247/my_avatar.png"
            }
            loader={
              <img
                alt=" member "
                style={Image}
                src={require("../../images/developer.png")}
              />
            }
            unloader={<h1> NOT LOADED </h1>}
          />
        </div>
      </Flex>
    </div>
  );
};
export default Build;
