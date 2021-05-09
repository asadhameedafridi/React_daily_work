import React from "react";
import { MemoryRouter, Link, Route } from "react-router-dom";

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
      <MemoryRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </MemoryRouter>
    </div>
  );
};

export default App;
