import React from "react";
import styled from "styled-components";
import posed from "react-pose";

const Div = styled.div`
  width: 100%
  height: 50vh
  background: #1e1f28 
  color: white
`;

const Content = posed.div({
  closed: { height: 0 },
  open: { height: "auto" }
});

const Text = styled.p`
  text-align: right
  font-weight: bold
  font-size: 1.5em
  padding-right: 5%
  padding-top: 2%
`;

const Title = styled.p`
	font-size: 1.5em;
	&:hover {
		border: 1px solid #fff;
		cursor: pointer;
    padding-top  : 10px
    padding-left  : 5px
    padding-bottom  : 10px
	}
`;

const Explanation = styled.p`
  font-size: 0.9em;
`;

const Contain = styled(Content)({
  marginLeft: "10px",
  overflow: "hidden",
  fontSize: "18px"
});

export default class Example extends React.Component {
  state = { open: false };

  render() {
    const { open } = this.state;

    return (
      <Div>
        <Text> FAQ </Text>

        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <div style={{ marginTop: "5px", marginBottom: "10px" }}>
            <Title
              className="title"
              onClick={() => this.setState({ open: open === 0 ? false : 0 })}
            >
              {open === 0 ? "- " : "+ "} Whats my name
            </Title>
            <Contain className="content" pose={open === 0 ? "open" : "closed"}>
              <div className="content-wrapper"> </div>
              <Explanation> TESTING TESTING </Explanation>
            </Contain>
            <hr style={{ backgroundColor: "white" }} />
          </div>
        </div>
      </Div>
    );
  }
}
