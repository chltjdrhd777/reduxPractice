import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./routes/home";
import { Provider } from "react-redux";
import { store } from "./redux/combinedStore";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Route exact path="/" component={Home}></Route>
      </Provider>
    </Router>
  );
}

export default App;
