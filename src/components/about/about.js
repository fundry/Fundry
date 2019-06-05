import React from "react";
import styled from "styled-components";
import Operation from "./operation";
import posed from "react-pose";
import SplitText from "react-pose-text";

const Div = styled.div`
  width: 100%
  background: transparent
`;

const Header = styled.p`
  color : #0748a8
  text-align: center
  font-weight: bold
  font-size: 2em
  padding-bottom: 3%
`;

const Contain = styled.div`
  margin-left: 3%
  margin-right: 3%
  font-size: 1.2em
  color : #022b69
`;

const Sidebar = posed.div({
  enter: {
    x: "0%",
    beforeChildren: true,
    staggerChildren: 50
  }
});

const charPoses = {
  exit: { opacity: 0 },
  enter: { opacity: 1 }
};

const Text = styled.p``;

export default function home() {
  return (
    <Div>
      <br />
      <Sidebar initialPose="exit" pose="enter">
        <Header>
          <SplitText charPoses={charPoses}>
            " Providing a launchpad for ideas "
          </SplitText>
        </Header>
      </Sidebar>
      <Contain>
        <Text>
          Fundry is a program developed to hm4bjfeb j4hgfjbhgek rh4kgegb,ekkgt
          jkvbwhjwgkkfjk ydkv wdkwyd gwdw nbhkeb 3f3ffe dwdwdw dwdx w222e e2rr a
          22e 2 1e2cs 4r4ede 4t5rvdwd 3rd33 4t4efed 3r3 e23e3r e2e2
        </Text>
        <Text>
          Fundry is a program developed to hm4bjfeb j4hgfjbhgek rh4kgegb,ekkgt
          jkvbwhjwgkkfjk ydkv wdkwyd gwdw nbhkeb 3f3ffe dwdwdw dwdx w222e e2rr a
          22e 2 1e2cs 4r4ede 4t5rvdwd 3rd33 4t4efed 3r3 e23e3r e2e2
        </Text>
      </Contain>
      <br /> <br />
      <div>
        <Operation />
      </div>
    </Div>
  );
}
