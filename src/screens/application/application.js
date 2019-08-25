import React from "react";
import styled from "styled-components";
import Footer from "../footer/footer";
import { Header } from "../../components/";
import Flex from "styled-flex-component";
import { Link } from "react-router-dom";
import { ReactComponent as Intro } from "./svg/intro.svg";

const Text = styled.p`
  padding-top: 1%;
  padding: 2em;
  color: #0e2f5a;
`;

const Head = styled.h4`
  text-align: center;
  padding: 1em;
  color: #0e2f5a;
`;

const Button = styled.button`
  background: #0e2f5a;
  text-align: right;
  border-radius: 4px;
  height: 35px;
  border: 1px solid #0e2f5a;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 1em;
  &:hover {
    color: #0e2f5a;
    background: #fff;
  }
`;

export default function home() {
  return (
    <>
      <Header />

      <Intro style={{ maxHeight: "35vh", marginLeft: "40%" }} />

      <div>
        <Head>Thank you for interest in joining the Fundry Program !</Head>
        <Text>
          kfjgjvd.d,v ,vjn jdfd.kjdv hd vdd.,l vdhjdckdldv fjdjvd,.mnv
          lfndmcndlkjvd dfldnvdv. nd vjdvd,nvdk, .dlvdnvdn kfjgjvd.d,v ,vjn
          jdfd.kjdv hd vdd.,l vdhjdckdldv fjdjvd,.mnv lfndmcndlkjvd dfldnvdv. nd
          vjdvd,nvdk, .dlvdnvdn kfjgjvd.d,v ,vjn jdfd.kjdv hd vdd.,l vdhjdckdldv
          fjdjvd,.mnv lfndmcndlkjvd dfldnvdv. nd vjdvd,nvdk, .dlvdnvdn
          kfjgjvd.d,v ,vjn jdfd.kjdv hd vdd.,l vdhjdckdldv fjdjvd,.mnv
        </Text>

        <div>
          <p style={{ textAlign: "center" }}>
            Please carefully go through our <a href="/"> Policies </a>{" "}
          </p>

          <Flex justifyCenter>
            <Link to="/form">
              <Button> Create Application </Button>
            </Link>

            <Button> Download Sample Form </Button>
          </Flex>

          <Text>
            kfjgjvd.d,v ,vjn jdfd.kjdv hd vdd.,l vdhjdckdldv fjdjvd,.mnv
            lfndmcndlkjvd dfldnvdv. nd vjdvd,nvdk, .dlvdnvdn kfjgjvd.d,v ,vjn
            jdfd.kjdv hd vdd.,l vdhjdckdldv fjdjvd,.mnv lfndmcndlkjvd dfldnvdv.
            nd vjdvd,nvdk, .dlvdnvdn kfjgjvd.d,v ,vjn jdfd.kjdv hd vdd.,l
            vdhjdckdldv fjdjvd,.mnv lfndmcndlkjvd dfldnvdv. nd vjdvd,nvdk,
            .dlvdnvdn kfjgjvd.d,v ,vjn jdfd.kjdv hd vdd.,l vdhjdckdldv
            fjdjvd,.mnv lfndmcndlkjvd dfldnvdv. nd vjdvd,nvdk, .dlvdnvdn
            kfjgjvd.d,v ,vjn
          </Text>
        </div>
      </div>
      <Footer showFeedback={false} />
    </>
  );
}
