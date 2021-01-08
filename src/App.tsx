import React from "react";
import { Provider } from "react-redux";

import { StyledMain } from "./ui/layout";
import { AppHeader } from "./components/app-header";
import { BillsScreen } from "./screens/bills-screen";
import { configureStore } from "./store/configure-store";
import { css } from "./stitches";

css.global({
  body: {
    fontFamily: "$sans",
    lineHeight: "$4",
    backgroundColor: "$mono800",
    color: "$mono300",
    "*:focus-visible": {
      outlineColor: "blue",
      outline: "1px solid",
      outlineOffset: "2px",
    },
    "*:focus": {
      outline: "none",
    },
  },
});

export const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <AppHeader />
      <StyledMain>
        <BillsScreen />
      </StyledMain>
    </Provider>
  );
};

export default App;
