import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { Image } from "react-bootstrap";

import { Header } from "../../components/";
import useWindowWidth from "../../hook_style";

const Blog = () => {
  const hooks = useWindowWidth();

  const Div = styled.div({
    padding: "1em"
  });

  const Card = styled.div({
    width: "20em",
    height: "30vh",
    borderRadius: "0px 0px 10px 10px",
    boxShadow: "0px 4px 5px grey"
  });

  const Category = styled.p`
    text-align: left
    font-size : 1.5em
`;

  const Title = styled.h5``;

  const Details = styled.div({
    padding: "1em"
  });

  const Hover = styled.div({
    cursor: "pointer"
  });

  const autoGrid = (minColumnWidth = 100, gridGap = 0) => ({
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
    gridGap
  });

  const Stack = styled.div({
    ...autoGrid(270, 20),
    padding: "2em"
  });

  return (
    <div>
      <Header screens="Eng" />

      <Div>
        <div>
          <Category> Machine Learning </Category>
          <hr />

          <Stack>
            <div>
              <Card>
                <Hover>
                  <Image
                    alt="cover"
                    src={require("../../images/test_banner.jpg")}
                    style={{
                      width: "20em",
                      height: "20vh"
                    }}
                  />
                </Hover>

                <Details>
                  <Flex justifyBetween>
                    <Hover>
                      <Flex>
                        <div style={{ paddingRight: "10px" }}>
                          <Image
                            alt="avatar"
                            src={require("../../images/lawyerF.png")}
                            fluid
                            roundedCircle
                            style={{ height: "40px", width: "40px" }}
                          />
                        </div>

                        <div style={{ paddingTop: "10px" }}>
                          <p> Victory Nwani </p>
                        </div>
                      </Flex>
                    </Hover>

                    <div style={{ paddingTop: "10px" }}>
                      <p> 14 / 14 / 14 </p>
                    </div>
                  </Flex>
                </Details>
              </Card>
              <Title> Machine Learning For Beginners </Title>
            </div>

            <div>
              <Card>
                <Hover>
                  <Image
                    alt="cover"
                    src={require("../../images/test_banner.jpg")}
                    fluid
                  />
                </Hover>

                <Details>
                  <Flex justifyBetween>
                    <Hover>
                      <Flex>
                        <div style={{ paddingRight: "10px" }}>
                          <Image
                            alt="avatar"
                            src={require("../../images/lawyer.png")}
                            fluid
                            roundedCircle
                            style={{ height: "40px", width: "40px" }}
                          />
                        </div>

                        <div style={{ paddingTop: "10px" }}>
                          <p> Victory Nwani </p>
                        </div>
                      </Flex>
                    </Hover>

                    <div style={{ paddingTop: "10px" }}>
                      <p> 14 / 14 / 14 </p>
                    </div>
                  </Flex>
                </Details>
              </Card>
              <Title> Machine Learning For Beginners </Title>
            </div>

            <div>
              <Card>
                <Hover>
                  <Image
                    alt="cover"
                    src={require("../../images/test_banner.jpg")}
                    fluid
                  />
                </Hover>

                <Details>
                  <Flex justifyBetween>
                    <Hover>
                      <Flex>
                        <div style={{ paddingRight: "10px" }}>
                          <Image
                            alt="avatar"
                            src={require("../../images/lawyerF.png")}
                            fluid
                            roundedCircle
                            style={{ height: "40px", width: "40px" }}
                          />
                        </div>

                        <div style={{ paddingTop: "10px" }}>
                          <p> Victory Nwani </p>
                        </div>
                      </Flex>
                    </Hover>

                    <div style={{ paddingTop: "10px" }}>
                      <p> 14 / 14 / 14 </p>
                    </div>
                  </Flex>
                </Details>
              </Card>
              <Title> Machine Learning For Beginners </Title>
            </div>

            <div>
              <Card>
                <Hover>
                  <Image
                    alt="cover"
                    src={require("../../images/test_banner.jpg")}
                    fluid
                  />
                </Hover>

                <Details>
                  <Flex justifyBetween>
                    <Hover>
                      <Flex>
                        <div style={{ paddingRight: "10px" }}>
                          <Image
                            alt="avatar"
                            src={require("../../images/lawyer.png")}
                            fluid
                            roundedCircle
                            style={{ height: "40px", width: "40px" }}
                          />
                        </div>

                        <div style={{ paddingTop: "10px" }}>
                          <p> Victory Nwani </p>
                        </div>
                      </Flex>
                    </Hover>

                    <div style={{ paddingTop: "10px" }}>
                      <p> 14 / 14 / 14 </p>
                    </div>
                  </Flex>
                </Details>
              </Card>
              <Title> Machine Learning For Beginners </Title>
            </div>
          </Stack>
        </div>
      </Div>

      <Div>
        <div>
          <Category style={{ textAlign: "right" }}>
            {" "}
            Cloud Engineering{" "}
          </Category>
          <hr />

          <Stack>
            <div>
              <Card>
                <Hover>
                  <Image
                    alt="cover"
                    src={require("../../images/test_banner.jpg")}
                    style={{
                      width: "20em",
                      height: "20vh"
                    }}
                  />
                </Hover>

                <Details>
                  <Flex justifyBetween>
                    <Hover>
                      <Flex>
                        <div style={{ paddingRight: "10px" }}>
                          <Image
                            alt="avatar"
                            src={require("../../images/lawyerF.png")}
                            fluid
                            roundedCircle
                            style={{ height: "40px", width: "40px" }}
                          />
                        </div>

                        <div style={{ paddingTop: "10px" }}>
                          <p> Victory Nwani </p>
                        </div>
                      </Flex>
                    </Hover>

                    <div style={{ paddingTop: "10px" }}>
                      <p> 14 / 14 / 14 </p>
                    </div>
                  </Flex>
                </Details>
              </Card>
              <Title> Machine Learning For Beginners </Title>
            </div>

            <div>
              <Card>
                <Hover>
                  <Image
                    alt="cover"
                    src={require("../../images/test_banner.jpg")}
                    fluid
                  />
                </Hover>

                <Details>
                  <Flex justifyBetween>
                    <Hover>
                      <Flex>
                        <div style={{ paddingRight: "10px" }}>
                          <Image
                            alt="avatar"
                            src={require("../../images/lawyer.png")}
                            fluid
                            roundedCircle
                            style={{ height: "40px", width: "40px" }}
                          />
                        </div>

                        <div style={{ paddingTop: "10px" }}>
                          <p> Victory Nwani </p>
                        </div>
                      </Flex>
                    </Hover>

                    <div style={{ paddingTop: "10px" }}>
                      <p> 14 / 14 / 14 </p>
                    </div>
                  </Flex>
                </Details>
              </Card>
              <Title> Machine Learning For Beginners </Title>
            </div>

            <div>
              <Card>
                <Hover>
                  <Image
                    alt="cover"
                    src={require("../../images/test_banner.jpg")}
                    fluid
                  />
                </Hover>

                <Details>
                  <Flex justifyBetween>
                    <Hover>
                      <Flex>
                        <div style={{ paddingRight: "10px" }}>
                          <Image
                            alt="avatar"
                            src={require("../../images/lawyerF.png")}
                            fluid
                            roundedCircle
                            style={{ height: "40px", width: "40px" }}
                          />
                        </div>

                        <div style={{ paddingTop: "10px" }}>
                          <p> Victory Nwani </p>
                        </div>
                      </Flex>
                    </Hover>

                    <div style={{ paddingTop: "10px" }}>
                      <p> 14 / 14 / 14 </p>
                    </div>
                  </Flex>
                </Details>
              </Card>
              <Title> Machine Learning For Beginners </Title>
            </div>

            <div>
              <Card>
                <Hover>
                  <Image
                    alt="cover"
                    src={require("../../images/test_banner.jpg")}
                    fluid
                  />
                </Hover>

                <Details>
                  <Flex justifyBetween>
                    <Hover>
                      <Flex>
                        <div style={{ paddingRight: "10px" }}>
                          <Image
                            alt="avatar"
                            src={require("../../images/lawyer.png")}
                            fluid
                            roundedCircle
                            style={{ height: "40px", width: "40px" }}
                          />
                        </div>

                        <div style={{ paddingTop: "10px" }}>
                          <p> Victory Nwani </p>
                        </div>
                      </Flex>
                    </Hover>

                    <div style={{ paddingTop: "10px" }}>
                      <p> 14 / 14 / 14 </p>
                    </div>
                  </Flex>
                </Details>
              </Card>
              <Title> Machine Learning For Beginners </Title>
            </div>
          </Stack>
        </div>
      </Div>
    </div>
  );
};

export default Blog;
