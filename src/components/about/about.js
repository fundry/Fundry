import React from "react";
import styled from "styled-components";
import Operation from "./operation";
import Uses from "./uses";
import { Grid } from "semantic-ui-react";
import { ReactComponent as Bulb } from "./svg/bulb.svg";
import Flex from "styled-flex-component";

const Div = styled.div`
  width: 100%
  background: transparent
`;

const Contain = styled.div`
  margin-left: 3%
  margin-right: 3%
  font-size: 1.2em
  color : #022b69
`;

const Text = styled.p``;

export default function home() {
  return (
    <Div>
      <br />

      <Contain>
        <Grid stackable columns="equal">
          <Grid.Row>
            <Grid.Column>
              <Flex justifyCenter>
                <Bulb style={{ height: "20vh", width: "50%" }} />
              </Flex>
            </Grid.Column>

            <Grid.Column>
              <Text>
                Fundry is a program developed to hm4bjfeb j4hgfjbhgek
                rh4kgegb,ekkgt jkvbwhjwgkkfjk ydkv wdkwyd gwdw nbhkeb 3f3ffe
                dwdwdw dwdx w222e e2rr a 22e 2 1e2cs 4r4ede 4t5rvdwd 3rd33
                4t4efed 3r3 e23e3r e2e2
              </Text>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Contain>
      <br />
      <Uses />
      <br />
      <div>
        <Operation />
      </div>
    </Div>
  );
}
