import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { Header } from "../../../components/";
import Footer from "../../footer/footer";
import { ReactComponent as Detail } from "../svg/detail.svg";

const Div = styled.div`
  width: 100%
  background: transparent
`;

const Contain = styled.div`
  margin-left: 3%
  margin-right: 3%
  font-size: 1.2em
  color : #022b69
`;

const Text = styled.p``;

export default function home() {
  return (
    <>
      <Header />
      <Detail style={{ maxHeight: "35vh", marginLeft: "40%" }} />
      <Div>
        <h1> FORMS PAGE </h1>
      </Div>

      <Footer showFeedback={false} />
    </>
  );
}
