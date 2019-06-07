import React from "react";
import { Banner, Faq, Recent, Footer, Legal, About } from "./components";
import { ApolloProvider } from "react-apollo";
import Client from "./data/config";

function App() {
  return (
    <ApolloProvider client={Client}>
      <div>
        <Banner /> <br />
        <About />
        <br /> <Legal /> <br />
        <Recent /> <br />
        <Faq />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
