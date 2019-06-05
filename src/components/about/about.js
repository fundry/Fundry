import React from "react";
import styled from "styled-components";
import Operation from "./operation";

const Div = styled.div`
  width: 100%
  background: transparent
`;

const Header = styled.p`
  color : #0748a8
  text-align: center
  font-weight: bold
  font-size: 2em
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
      {" "}
      <br />
      <Header> / " Providing a launchpad for ideas " / </Header>
      <Contain>
        <Text>
          Fundry is a program developed to hm4bjfeb j4hgfjbhgek rh4kgegb,ekkgt
          jkvbwhjwgkkfjk ydkv wdkwyd gwdw nbhkeb 3f3ffe dwdwdw dwdx w222e e2rr a
          22e 2 1e2cs 4r4ede 4t5rvdwd 3rd33 4t4efed 3r3 e23e3r e2e2 e2e2 3r3wdw
          rw r3 33r3 3r3r35 grfed wee stewfr se tse5 e5 es sese gsg sdg sdgs gs
        </Text>
      </Contain>
      <br /> <br />
      <div>
        <Operation />
      </div>
    </Div>
  );
}
