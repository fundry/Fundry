import React from "react";
import styled from "styled-components";
import Header from "../banner/header";
import Footer from "../footer/footer";
import { Image } from "react-bootstrap";
import useWindowWidth from "../hook_style";

const Title = styled.h4`
  padding-right: 5%;
`;

const Text = styled.h4`
  text-align :  center
  padding-top : 5% 
`;

const autoGrid = (minColumnWidth = 150, gridGap = 0) => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
  gridGap
});

const Gallery = styled.div({
  ...autoGrid(150, 10),
  padding: "2em"
});

const AllTeam = () => {
  const hooks = useWindowWidth();

  const Div = styled.div` 
  padding:  1em ,
background: #f2f5ff
`;

  return (
    <div>
      <Header />
      <div style={{ boxShadow: "0px 3px 4px grey" }}>
        {hooks >= 850 ? (
          <Image
            fluid
            src={require("../../images/test_banner.jpg")}
            style={{ width: "100%", height: "575px" }}
          />
        ) : (
          <Image
            fluid
            src={require("../../images/test_banner.jpg")}
            style={{ width: "100%", height: "350px" }}
          />
        )}
      </div>
      <br /> <br />
      {hooks >= 850 ? (
        <Div style={{ paddingLeft: "2.5%", paddingRight: "2.5%" }}>
          <div style={{ padding: "1em", textAlign: "left" }}>
            <Title> Founders and Executives </Title>{" "}
            <Gallery>
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
            </Gallery>
          </div>
          <div style={{ padding: "1em", textAlign: "right" }}>
            <Title> Team Leads </Title>{" "}
            <Gallery>
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
            </Gallery>
          </div>
          <div style={{ padding: "1em", textAlign: "left" }}>
            <Title> Engineering Team </Title>{" "}
            <Gallery>
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
            </Gallery>
          </div>
          <div style={{ padding: "1em", textAlign: "right" }}>
            <Title> Legal Team </Title>{" "}
            <Gallery>
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
            </Gallery>
          </div>
          <div style={{ padding: "1em", textAlign: "left" }}>
            <Title> Human Resource Team </Title>{" "}
            <Gallery>
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
            </Gallery>
          </div>
        </Div>
      ) : (
        <Div>
          <div style={{ padding: "1em", textAlign: "left" }}>
            <Title> Founders and Executives </Title>{" "}
            <Gallery>
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
            </Gallery>
          </div>
          <div style={{ padding: "1em", textAlign: "right" }}>
            <Title> Team Leads </Title>{" "}
            <Gallery>
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
            </Gallery>
          </div>
          <div style={{ padding: "1em", textAlign: "left" }}>
            <Title> Engineering Team </Title>{" "}
            <Gallery>
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
            </Gallery>
          </div>
          <div style={{ padding: "1em", textAlign: "right" }}>
            <Title> Legal Team </Title>{" "}
            <Gallery>
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
            </Gallery>
          </div>
          <div style={{ padding: "1em", textAlign: "left" }}>
            <Title> Human Resource Team </Title>{" "}
            <Gallery>
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
              <Image
                src={require("../../images/lawyer.png")}
                roundedCircle
                style={{ height: "120px" }}
              />{" "}
            </Gallery>
          </div>
        </Div>
      )}
      <Footer />
    </div>
  );
};
export default AllTeam;
