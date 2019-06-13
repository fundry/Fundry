import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Customer, Form, Dev } from "../svg/index";
import { Grid } from "semantic-ui-react";
import Flex from "styled-flex-component";
import { ReactComponent as Process } from "../svg/process.svg";
import useWindowWidth from "../../hook_style";
import Desktop from "./desktop";

const Div = styled.div`
  width: 100%
  background:#f4f4f4
  padding-top: 3%
  padding-bottom: 5%
`;

const Button = styled.button`
  background: #0e2f5a;
  text-align: right;
  border-radius: 4px;
  height: 35px;
  border: 1px solid #0e2f5a;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 1em;
  &:hover {
    color: #0e2f5a;
    background: #fff;
  }
`;

const Header = styled.p`
  color : #0748a8
  text-align: right
  padding-right: 5%
  font-size: 2em
  font-weight : bold
`;

const Operation = () => {
  const hooks = useWindowWidth();

  return (
    <Div>
      <Header> How Does It Work ? </Header>
      <p
        style={{
          float: "right",
          fontSize: "1.3em",
          paddingRight: "5%",
          color: "#0e2f5a"
        }}
      >
        Development Phase
      </p>

      <Desktop />

      <Link to="./apply">
        <div style={{ textAlign: "right", paddingBottom: "5px" }}>
          <Button> Begin Process </Button>
        </div>
      </Link>
    </Div>
  );
};

export default Operation;
