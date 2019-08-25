import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";

import { Header } from "../../components/";
import useWindowWidth from "../../hook_style";

const Blog = () => {
  const hooks = useWindowWidth();

  return (
    <div>
      <Header screens="Eng" />

      <p> Blog</p>
    </div>
  );
};

export default Blog;
