import React from "react";
import HeaderContainer from "./header_footer/header_container.jsx";
import Footer from "./header_footer/footer.jsx";

const App = ({children}) => (
  <div>
    <HeaderContainer />
      <div className="children">{children}</div>
    <Footer />
  </div>
);

export default App;
