import React from "react";
import { Header } from "../components/";
import Flex from "styled-flex-component";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const login = () => {
  const Input = styled.input`
    width : 50%
    height  : 50px
    border-radius : 5px  
  `;

  const Button = styled.div`
    text-align : center 
		background: #1b1b1b;
		border-radius: 4px;
		color: white;
		margin: 0 1em;
		height: 50px;
		padding: 0.25em 3em;
		margin-top: 10px;
		padding-top: 15px;
		font-size: 1em;
		&:hover {
			color: black;
			border: 1.5px solid #1b1b1b;
			background: white;
			cursor: pointer;
		}
	`;

  const Create = styled.div`
        text-align : center 
		background: #0e2f5a;;
		border-radius: 4px;
		color: white;
		margin: 0 1em;
		height: 50px; 
		padding: 0.25em 3em;
		margin-top: 10px;
		padding-top: 10px;
		font-size: 1.2em;
		&:hover {
			color: #0e2f5a;;
			border: 1.5px solid #0e2f5a;;
			background: white;
			cursor: pointer;
		}
	`;

  return (
    <div
      style={{
        backgroundColor: "#b8deff",
        paddingBottom: "15vh"
      }}
    >
      <Header />

      <div>
        <Flex justifyCenter>
          <Card
            style={{
              width: "85%",
              background: "#fff",
              marginTop: "10%",
              paddingTop: "2%",
              paddingRight: "2%",
              paddingLeft: "2%",
              paddingBottom: "5%",
              borderRadius: "10px"
            }}
          >
            <div>
              <h4 style={{ fontWeight: "bold", textAlign: "center" }}>
                {" "}
                LOGIN{" "}
              </h4>
              <p style={{ textAlign: "center" }}>
                Login into an existing account
              </p>
              <hr />
            </div>

            <form name="login">
              <Flex justifyCenter>
                <Flex column>
                  <Input
                    placeholder={"Email "}
                    type="text"
                    name="name"
                    style={{
                      height: "45px",
                      paddingLeft: "10px",
                      marginTop: "10px",
                      marginBottom: "4%",
                      borderRadius: "3px",
                      borderWidth: "0.5px",
                      width: "350px",
                      borderColor: "#1B1B1B"
                    }}
                  />

                  <Input
                    placeholder={"password "}
                    type="password"
                    name="password"
                    style={{
                      height: "45px",
                      paddingLeft: "10px",
                      marginTop: "10px",
                      marginBottom: "4%",
                      borderRadius: "3px",
                      borderWidth: "0.5px",
                      width: "350px",
                      borderColor: "#1B1B1B"
                    }}
                  />
                </Flex>
              </Flex>

              <Flex justifyCenter>
                <Link to="/profile">
                  <Button> Login </Button>
                </Link>
              </Flex>
            </form>

            <div style={{ textAlign: "right" }}>
              <a href="/"> Forgot Password </a>
            </div>

            <div style={{ paddingTop: "5%", paddingBottom: "5%" }}>
              <Flex justifyAround>
                <Icon name="google" size="big" />
                <Icon name="facebook" size="big" />
              </Flex>
            </div>

            <div style={{ marginTop: "20px" }}>
              <hr />
              <Flex justifyCenter>
                <Link to="/signup">
                  <Create>Create Account</Create>
                </Link>
              </Flex>
            </div>
          </Card>
        </Flex>
      </div>
    </div>
  );
};

export default login;
