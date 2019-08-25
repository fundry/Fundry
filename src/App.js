import React from "react";
import { ApolloProvider } from "react-apollo";
import { Provider } from "mobx-react";

import Client from "./data/config";
import { Banner, Faq, Press, Footer, Legal, About } from "./screens";
import { Teststore } from "./state/";

function App() {
  return (
    <Provider Store={Teststore}>
      <ApolloProvider client={Client}>
        <div>
          <Banner />
          <About />
          <Legal /> <br /> <br />
          <Press />
          <br /> <br />
          <Faq />
          <Footer showFeedback={true} />
        </div>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
