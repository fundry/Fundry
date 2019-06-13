import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";

const Access = () => {
  const Head = styled.h4`
    paddingleft: 3%;
  `;

  return (
    <div>
      <br />
      <Flex justifyCenter>
        <Head> Access to all paid tools. </Head>
      </Flex>
    </div>
  );
};

export default Access;
