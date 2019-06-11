import React from "react";
import Header from "../banner/header";
import Flex from "styled-flex-component";
import styled from "styled-components";
import { Card } from "react-bootstrap";

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
		width: 30%;
		padding: 0.25em 1em;
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
		width: 50%;
		padding: 0.25em 1em;
		margin-top: 10px;
		padding-top: 15px;
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
        paddingBottom: "100vh"
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
              paddingTop: "5%",
              paddingRight: "5%",
              paddingLeft: "5%",
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
                <Button> Login </Button>
              </Flex>
            </form>

            <div style={{ textAlign: "right" }}>
              <a href="/"> Forgot Password </a>
            </div>

            <div style={{ marginTop: "20px" }}>
              <hr />
              <Flex justifyCenter>
                <Create>Create Account</Create>
              </Flex>
            </div>
          </Card>
        </Flex>
      </div>
    </div>
  );
};

export default login;
