import React from "react";
import { HashRouter, Link, Route } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      Page One
      <Link to="/pagetwo">Navigate to page two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <button>Click me</button>Page two
      <Link to="/">Naviagte to page one</Link>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <HashRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </HashRouter>
    </div>
  );
};

export default App;
