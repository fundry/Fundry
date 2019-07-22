import React, { Component } from "react";
import styled from "styled-components";
import { media } from ".././media_style";
import Flex from "styled-flex-component";
import { Grid, Icon } from "semantic-ui-react";
import { Planet } from "react-kawaii";

export default class reset extends Component {
  state = {
    sent: false
  };

  render() {
    const Input = styled.input`
      width : 50%
      margin-left : 7%
      height  : 70px
      border-radius : 5px  
    `;

    const Button = styled.div`
			background: #1B1B1B;
			text-align: center
			border-radius: 4px;
			color: white;
			margin: 0 1em;
			height: 50px;
			width: 30%;
			padding: 0.25em 1em;
			margin-top: 25px;
			padding-top: 15px;
			font-size: 1em;
			&:hover {
				color: black;
			border: 1.5px solid #1B1B1B;
      background: white;
				cursor: pointer;
			}
		`;

    const Header = styled.p`
      padding: 0.25em 1em;
      padding-top: 10px;
      font-size: 1.7em;
    `;

    const Feeds = styled.div`
	  ${media.desktop`
   padding-top: 15%
      `} ${media.tablet`
      padding-top: 20%
      `}  ${media.medium`
      padding-top: 20px; 
   `}
		`;

    const Press = () => {
      this.setState({ sent: true });
    };

    if (this.state.sent === false) {
      return (
        <div>
          <Grid stackable columns="equal">
            <Grid.Column>
              <br />
              <Feeds>
                <Header style={{ textAlign: "center", fontWeight: "bold" }}>
                  {"  Let's get in touch."}
                </Header>
                <div style={{ marginLeft: "30px" }}>
                  <Flex justifyBetween>
                    <Icon name="facebook" size="big" color="#1B1B1B#1B1B1B" />
                    <Icon name="twitter" size="big" color="#1B1B1B" />
                    <Icon name="instagram" size="big" color="#1B1B1B" />
                    <Icon name="medium" size="big" color="#1B1B1B" />
                  </Flex>
                </div>
              </Feeds>
            </Grid.Column>

            <Grid.Column>
              <form
                name="Feedback"
                style={{ textAlign: "center", marginRight: "20px" }}
              >
                <h4> Feedback </h4>

                <Input
                  placeholder={"Name "}
                  type="text"
                  name="name"
                  style={{
                    height: "45px",
                    paddingLeft: "10px",
                    marginTop: "4%",
                    marginBottom: "4%",
                    borderRadius: "3px",
                    borderWidth: "0.5px",
                    width: "350px",
                    borderColor: "#1B1B1B"
                  }}
                />

                <Input
                  placeholder={"Email"}
                  type="email"
                  name="email"
                  style={{
                    height: "45px",
                    paddingLeft: "10px",
                    borderRadius: "3px",
                    borderWidth: "0.5px",
                    width: "350px",
                    borderColor: "#1B1B1B "
                  }}
                />
                <textarea
                  type="text"
                  name="message"
                  placeholder={"Leave a message"}
                  style={{
                    height: "100px",
                    marginTop: "20px",
                    paddingLeft: "10px",
                    marginLeft: "10%",
                    paddingTop: "15px",
                    borderRadius: "3px",
                    borderWidth: "0.5px",
                    width: "350px",
                    borderColor: "#1B1B1B",
                    marginRight: "20px"
                  }}
                />

                <Flex justifyCenter>
                  <Button
                    onClick={() => {
                      Press();
                    }}
                  >
                    Send
                  </Button>
                </Flex>
              </form>
              <br />
              <br />
            </Grid.Column>
          </Grid>
        </div>
      );
    } else {
      return (
        <div
          style={{
            textAlign: "center",
            paddingTop: "5%",
            marginBottom: "2.5%"
          }}
        >
          <Flex column>
            <Planet size={220} mood="excited" color="#596881" />
            <h5 style={{ marginTop: "3%" }}> Message Sent ! </h5>
            <h5> A response would be sent via mail. </h5>
          </Flex>
        </div>
      );
    }
  }
}
