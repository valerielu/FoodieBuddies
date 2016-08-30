import React from "react";
import GreetingContainer from "./session/greeting_container.jsx";

const App = ({children}) => (
  <div>
    <h1>FoodieBuddies</h1>
    <GreetingContainer />
    {children}
  </div>
);

export default App;
