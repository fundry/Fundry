import React, { Component } from "react";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";
import styled from "styled-components";
import Message from "./message";

const Div = styled.div`
  background: linear-gradient(to bottom, #eee, #000);
`;

export default class reset extends Component {
  render() {
    if (this.props.showFeedback === false) {
      return (
        <Div>
          {" "}
          <br />
          <Segment inverted vertical style={{ backgroundColor: "#111111" }}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Header inverted as="h3" content="About" />
                    <List link inverted>
                      <List.Item as="a">Getting Started </List.Item>
                      <List.Item as="a">Guides</List.Item>
                      <List.Item as="a">Security </List.Item>
                      <List.Item as="a">Legal </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Header inverted as="h3" content="Social" />
                    <List link inverted>
                      <List.Item as="a"> Gmail </List.Item>
                      <List.Item as="a">Twitter </List.Item>
                      <List.Item as="a"> Medium </List.Item>
                      <List.Item as="a"> Facebook </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Header inverted as="h3" content="More " />
                    <List link inverted>
                      <List.Item as="a">Careers</List.Item>
                      <List.Item as="a">Announcement</List.Item>
                      <List.Item as="a">Releases</List.Item>
                    </List>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>

            <div>
              <h5 style={{ textAlign: "center", marginTop: "2em" }}>
                {" "}
                Copyright © {new Date().getFullYear()} . All rights reserved .
              </h5>
            </div>
          </Segment>
        </Div>
      );
    } else {
      return (
        <Div>
          <Message />
          <br />
          <Segment
            inverted
            vertical
            style={{ padding: "5em 0em", backgroundColor: "#111111" }}
          >
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Header inverted as="h3" content="About" />
                    <List link inverted>
                      <List.Item as="a">Getting Started </List.Item>
                      <List.Item as="a">Guides</List.Item>
                      <List.Item as="a">Security </List.Item>
                      <List.Item as="a">Legal </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Header inverted as="h3" content="Social" />
                    <List link inverted>
                      <List.Item as="a"> Gmail </List.Item>
                      <List.Item as="a">Twitter </List.Item>
                      <List.Item as="a"> Medium </List.Item>
                      <List.Item as="a"> Facebook </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Header inverted as="h3" content="More " />
                    <List link inverted>
                      <List.Item as="a">Careers</List.Item>
                      <List.Item as="a">Announcement</List.Item>
                      <List.Item as="a">Releases</List.Item>
                    </List>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>

            <div>
              <h6 style={{ textAlign: "center", marginTop: "1em" }}>
                {" "}
                Copyright © {new Date().getFullYear()} . All rights reserved .
              </h6>
            </div>
          </Segment>
        </Div>
      );
    }
  }
}
