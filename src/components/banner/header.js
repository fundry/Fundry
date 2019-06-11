import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Img from "react-image";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { media } from "../media_style";
import { AuthConsumer } from "../auth/protected/AuthContext";
import useWindowWidth from "../hook_style";

const Header = () => {
  const Div = styled.div`
      height: 9vh
      background : #444444
      padding-top: 1%;
    `;
  const A = styled.a`
    ${media.tablet`
			font-size: 1.3em
		`}
    ${media.phone`
			font-size: 1em
		`}
			color: #0E2F5A;
    text-decoration: none;
    font-size: 20px;
    height: 10%;
  `;

  const Image = styled(Img)`
    width: 7%;
    height: 25px;
  `;

  const Button = styled.button`
    background: #0e2f5a;
    text-align: right;
    border-radius: 7px;
    height: 30px;
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

  // react hooks && event listeners
  const NameDiv = styled.div`
    margin-left: 4%;
  `;

  const hooks = useWindowWidth();
  return (
    <AuthConsumer>
      {({ isAuth, login, logout }) => (
        <Div>
          <nav>
            <Flex justifyBetween>
              <NameDiv>
                <Flex>
                  <Image
                    src={
                      "https://res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png"
                    }
                  />
                  <Link href="/">
                    <A>Fundry</A>
                  </Link>
                </Flex>
              </NameDiv>

              <div>{hooks >= 650 ? <p> . </p> : <p> ..</p>}</div>

              {isAuth ? (
                <Flex>
                  <Button> Apply </Button>
                  <Button onClick={logout}> Logout </Button>
                  <Button> Profile </Button>
                </Flex>
              ) : (
                <Flex>
                  <Link to="/apply">
                    <Button> Apply </Button>
                  </Link>
                  <Link to="/login">
                    <Button onClick={login}> Login </Button>
                  </Link>
                </Flex>
              )}
            </Flex>
          </nav>
        </Div>
      )}
    </AuthConsumer>
  );
};

export default Header;
