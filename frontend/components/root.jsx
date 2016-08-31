import React from "react";
import { Provider } from 'react-redux';
import AppRouterContainer from "./router_container.jsx";
import AppRouter from "./router.jsx";

const Root = ({store}) => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default Root;
