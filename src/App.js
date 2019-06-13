import React from "react";
import { Banner, Faq, Recent, Press, Footer, Legal, About } from "./components";
import { ApolloProvider } from "react-apollo";
import Client from "./data/config";

function App() {
  return (
    <ApolloProvider client={Client}>
      <div>
        <Banner />
        <About />
        <Legal /> <br /> <br />
        <Press />
        <br /> <br />
        <Recent />
        <Faq />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
