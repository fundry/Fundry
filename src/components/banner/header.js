import { Link } from "react-router-dom";
import React from "react";
import Img from "react-image";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { AuthConsumer } from "../auth/protected/AuthContext";
import useWindowWidth from "../hook_style";

const Header = () => {
  const Div = styled.div`
      padding: 1em
      background : #444444
      padding-top: 1%; 
    `;
  const A = styled.a`
    color: #0e2f5a;
    text-decoration: none;
    font-size: 1.85em;
    font-family: comic sans ms;
  `;

  const Title = styled.a`
	font-size : 1.2em
	color  : white
`;

  const Image = styled(Img)`
    width: 7%;
    height: 25px;
  `;

  const Button = styled.button`
    background: #0e2f5a 
    text-align: right;
    border-radius: 7px;
    height: 40px;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 1em;
    padding: 0.25em 2em;
    font-size: 1em;
    &:hover {
      color: #0e2f5a;
      background: #fff;
    }
  `;

  const Apply = styled.button`
    background: #f9db77;
    text-align: right;
    border-radius: 5px;
    height: 35px
    border: 1px solid #0e2f5a;
    color: #0e2f5a;
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
        <div style={{ boxShadow: "0px 2px 5px #05156b" }}>
          {hooks >= 720 ? (
            <Div style={{ paddingTop: "2%" }}>
              <nav>
                <Flex justifyBetween>
                  <NameDiv>
                    <Link href="/">
                      <A>Fundry</A>
                    </Link>
                  </NameDiv>

                  {isAuth ? (
                    <Flex>
                      <Button> Apply </Button>
                      <Button onClick={logout}> Logout </Button>
                      <Button> Profile </Button>
                    </Flex>
                  ) : (
                    <Flex justifyBetween>
                      <div>
                        <Flex>
                          <div style={{ paddingRight: "30px" }}>
                            <Link to="/apply">
                              <Title> Engineering </Title>
                            </Link>
                          </div>
                          <div style={{ paddingRight: "30px" }}>
                            <Link to="/apply">
                              <Title> Blog </Title>
                            </Link>
                          </div>
                          <div style={{ paddingRight: "30px" }}>
                            <Link to="/apply">
                              <Title> FAQ </Title>
                            </Link>
                          </div>
                          <div style={{ paddingRight: "30px" }}>
                            <Link to="/apply">
                              <Title> Team </Title>
                            </Link>
                          </div>
                        </Flex>
                      </div>

                      <Link to="/login">
                        <Apply onClick={login}> Start Application </Apply>
                      </Link>
                    </Flex>
                  )}
                </Flex>
              </nav>
            </Div>
          ) : (
            <Div
              style={{ padding: "1em", paddingTop: "2%", paddingRight: "3%" }}
            >
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

                  {isAuth ? <Button> Menu </Button> : <Button> Menus </Button>}
                </Flex>
              </nav>
            </Div>
          )}
        </div>
      )}
    </AuthConsumer>
  );
};

export default Header;
