import React from "react";
import Header from "./header_footer/header.jsx";
import Footer from "./header_footer/footer.jsx";

const App = ({children}) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default App;
