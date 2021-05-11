import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducers from "./reducers";
import GoogleAuthRedux from "./GoogleAuthRedux";

const store = createStore(Reducers);

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <GoogleAuthRedux />
      </Provider>
    </div>
  );
};

export default App;
