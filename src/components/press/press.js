import React from "react";
import styled from "styled-components";
import { Grid, Icon } from "semantic-ui-react";
import Flex from "styled-flex-component";

const Press = () => {
  const Head = styled.h2`
    font-weight: bold;
  `;

  const Subtitle = styled.p`
    font-size: 1.2em;
  `;

  const Title = styled.h4`
    font-weight: bold;
    text-align: center;
  `;

  const Summary = styled.p`
        padding-top: 10px;
        padding-left  : 5%
        padding-right  : 5%
	`;

  const Button = styled.div`
    background: #1B1B1B;
    text-align: center
    border-radius: 4px;
    color: white;
    margin: 0 1em;
    height: 40px;
    padding: 0.25em 1em;
    margin-top: 10px;
    padding-top: 7px;
    font-size: 1em;
    &:hover {
        color: black;
    border: 1.5px solid #1B1B1B;
        background:  #fff;
        cursor: pointer;
    }
`;

  return (
    <div style={{ paddingTop: "3%", marginLeft: "3%", marginRight: "3%" }}>
      <div style={{ textAlign: "center" }}>
        <Head> Press Releases </Head>
        <Subtitle> Recent blog posts from the media team.</Subtitle>
        <hr />
      </div>

      <Flex justifyCenter>
        <Grid stackable columns={2} style={{ paddingTop: "2%" }}>
          <Grid.Row>
            <Grid.Column style={{ paddingBottom: "5%" }}>
              <div
                style={{
                  paddingBottom: "5%",
                  paddingRight: "7%",
                  paddingLeft: "7%"
                }}
              >
                <Title> Our First Blog Post </Title>
                <hr />

                <Summary>
                  okm bmndhtd n bdlth hrtglkrg ghnrglkrmgrgli okm bmndhtd n
                  bdlth hrtglkrg ghnrglkrmgrgli okm bmndhtd n bdlth hrtglkrg
                  ghnrglkrmgrgli
                </Summary>

                <Summary>
                  okm bmndhtd n bdlth hrtglkrg ghnrglkrmgrgli okm bmndhtd n
                  bdlth hrtglkrg ghnrglkrmgrgli okm bmndhtd n bdlth hrtglkrg
                  ghnrglkrmgrgli
                </Summary>

                <Flex justifyCenter>
                  <Button href="/"> Continue Reading </Button>
                </Flex>
              </div>
            </Grid.Column>

            <Grid.Column style={{ paddingBottom: "5%" }}>
              <div
                style={{
                  paddingBottom: "5%",
                  paddingRight: "7%",
                  paddingLeft: "7%"
                }}
              >
                <Title> Our First Blog Post </Title>
                <hr />

                <Summary>
                  okm bmndhtd n bdlth hrtglkrg ghnrglkrmgrgli okm bmndhtd n
                  bdlth hrtglkrg ghnrglkrmgrgli okm bmndhtd n bdlth hrtglkrg
                  ghnrglkrmgrgli
                </Summary>

                <Flex justifyCenter>
                  <Button href="/"> Continue Reading </Button>
                </Flex>
              </div>
            </Grid.Column>

            <Grid.Column style={{ paddingBottom: "5%" }}>
              <div
                style={{
                  paddingBottom: "5%",
                  paddingRight: "7%",
                  paddingLeft: "7%"
                }}
              >
                <Title> Our First Blog Post </Title>
                <hr />

                <Summary>
                  okm bmndhtd n bdlth hrtglkrg ghnrglkrmgrgli okm bmndhtd n
                  bdlth hrtglkrg ghnrglkrmgrgli okm bmndhtd n bdlth hrtglkrg
                  ghnrglkrmgrgli
                </Summary>

                <Summary>
                  okm bmndhtd n bdlth hrtglkrg ghnrglkrmgrgli okm bmndhtd n
                  bdlth hrtglkrg ghnrglkrmgrgli okm bmndhtd n bdlth hrtglkrg
                  ghnrglkrmgrgli
                </Summary>

                <Flex justifyCenter>
                  <Button href="/"> Continue Reading </Button>
                </Flex>
              </div>
            </Grid.Column>

            <Grid.Column style={{ paddingBottom: "5%" }}>
              <div
                style={{
                  paddingBottom: "5%",
                  paddingRight: "7%",
                  paddingLeft: "7%"
                }}
              >
                <Title> Our First Blog Post </Title>
                <hr />

                <Summary>
                  okm bmndhtd n bdlth hrtglkrg ghnrglkrmgrgli okm bmndhtd n
                  bdlth hrtglkrg ghnrglkrmgrgli okm bmndhtd n bdlth hrtglkrg
                  ghnrglkrmgrgli
                </Summary>

                <Summary>
                  okm bmndhtd n bdlth hrtglkrg ghnrglkrmgrgli okm bmndhtd n
                  bdlth hrtglkrg ghnrglkrmgrgli okm bmndhtd n bdlth hrtglkrg
                  ghnrglkrmgrgli
                </Summary>

                <Flex justifyCenter>
                  <Button href="/"> Continue Reading </Button>
                </Flex>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Flex>
    </div>
  );
};

export default Press;
