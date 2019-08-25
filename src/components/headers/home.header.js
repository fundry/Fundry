import { Link } from "react-router-dom";
import React from "react";
import Img from "react-image";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { FiMenu } from "react-icons/fi";

import { AuthConsumer } from "../../auth/protected/AuthContext";
import useWindowWidth from "../../hook_style";

const Header = props => {
  const hooks = useWindowWidth();

  const Div = styled.div`
      padding: 0.5em
      background : #444444
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
    border-radius: 5px;
    height: 40px;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 1em;
    padding: 0.50em 1.5em;
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
    border: 0.3px solid #0e2f5a;
    color: #0e2f5a;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-size: 1em;
    &:hover {
      color: #0e2f5a;
      background: #fff;
    }
  `;

  const Eng = styled.div({
    padding: "1em",
    textAlign: "center",
    background: hooks >= 720 ? "#f9db77" : " #0e2f5a",
    color: hooks >= 720 ? "#0e2f5a" : " #fff"
  });

  // react hooks && event listeners
  const NameDiv = styled.div`
    margin-left: 4%;
  `;

  return (
    <div>
      {props.screens === "Eng" ? (
        <AuthConsumer>
          {({ isAuth, login, logout }) => (
            <div style={{ boxShadow: "0px 7px 7px grey" }}>
              {hooks >= 720 ? (
                <div>
                  <Div
                    style={{
                      paddingTop: "1%"
                    }}
                  >
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
                                  <Link to="/blog">
                                    <Title> Blog </Title>
                                  </Link>
                                </div>
                                <div style={{ paddingRight: "30px" }}>
                                  <Link to="/faq">
                                    <Title> FAQ </Title>
                                  </Link>
                                </div>
                                <div style={{ paddingRight: "30px" }}>
                                  <Link to="/team">
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
                  <Eng>
                    <h4> Fundry Engineering</h4>
                  </Eng>
                </div>
              ) : (
                <div>
                  <Div style={{ padding: "0.5em", paddingRight: "1%" }}>
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

                        {isAuth ? (
                          <Button>
                            <Flex>
                              <FiMenu
                                style={{ fontSize: "1.5em", color: "#fff" }}
                              />
                              <p style={{ paddingLeft: "10px" }}> Menu</p>
                            </Flex>
                          </Button>
                        ) : (
                          <Button>
                            <Flex>
                              <FiMenu
                                style={{ fontSize: "1.5em", color: "#fff" }}
                              />
                              <p style={{ paddingLeft: "10px" }}> Menu</p>
                            </Flex>
                          </Button>
                        )}
                      </Flex>
                    </nav>
                  </Div>
                  <Eng>
                    <h4> Fundry Engineering</h4>
                  </Eng>
                </div>
              )}
            </div>
          )}
        </AuthConsumer>
      ) : (
        <AuthConsumer>
          {({ isAuth, login, logout }) => (
            <div style={{ boxShadow: "0px 7px 7px grey" }}>
              {hooks >= 720 ? (
                <div>
                  <Div
                    style={{
                      paddingTop: "1%"
                    }}
                  >
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
                                  <Link to="/blog">
                                    <Title> Blog </Title>
                                  </Link>
                                </div>
                                <div style={{ paddingRight: "30px" }}>
                                  <Link to="/faq">
                                    <Title> FAQ </Title>
                                  </Link>
                                </div>
                                <div style={{ paddingRight: "30px" }}>
                                  <Link to="/team">
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
                </div>
              ) : (
                <div>
                  <Div style={{ padding: "0.5em", paddingRight: "1%" }}>
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

                        {isAuth ? (
                          <Button>
                            <Flex>
                              <FiMenu
                                style={{ fontSize: "1.5em", color: "#fff" }}
                              />
                              <p style={{ paddingLeft: "10px" }}> Menu</p>
                            </Flex>
                          </Button>
                        ) : (
                          <Button>
                            <Flex>
                              <FiMenu
                                style={{ fontSize: "1.5em", color: "#fff" }}
                              />
                              <p style={{ paddingLeft: "10px" }}> Menu</p>
                            </Flex>
                          </Button>
                        )}
                      </Flex>
                    </nav>
                  </Div>
                </div>
              )}
            </div>
          )}
        </AuthConsumer>
      )}
    </div>
  );
};

export default Header;
