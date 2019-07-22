import React from "react";
import styled from "styled-components";
import Header from "../banner/header";
import Footer from "../footer/footer";

const Div = styled.div`
    padding:  1em ,
  background: #f2f5ff
`;

const Title = styled.h4`
  padding-right: 5%;
`;

const Text = styled.h4`
  text-align :  center
  padding-top : 5% 
`;

const AllTeam = () => {
  return (
    <div>
      <Header />

      <Div>
        <div style={{ padding: "1em", textAlign: "left" }}>
          <Title> Founders and Executives </Title>{" "}
        </div>
        <div style={{ padding: "1em", textAlign: "right" }}>
          <Title> Team Leads </Title>
        </div>
        <div style={{ padding: "1em", textAlign: "left" }}>
          <Title> Engineering Team </Title>
        </div>
        <div style={{ padding: "1em", textAlign: "right" }}>
          <Title> Legal Team </Title>
        </div>
        <div style={{ padding: "1em", textAlign: "left" }}>
          <Title> Human Resource Team </Title>
        </div>
      </Div>

      <Footer />
    </div>
  );
};
export default AllTeam;
