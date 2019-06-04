import React from "react";
import { Banner, Faq, Recent, Footer, Legal, About } from "./components";

function App() {
  return (
    <div>
      <Banner /> <br />
      <About /> <br />
      <Legal /> <br />
      <Recent /> <br />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
