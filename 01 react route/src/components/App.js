import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      Page One
      {/**  README.md 4 Bad Approach !!!!!!!!!!!!! */}
      {/* <a href="/pagetwo">Navigate to page two</a> */}
      <Link to="/pagetwo">Navigate to page two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <button>Click me</button>Page two
      {/**Bad Approach !!!!!!!!!!!!! */}
      {/* <a href="/">Naviagte to page one</a> */}
      <Link to="/">Naviagte to page one</Link>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* README.md 1  we can route mulitple router in same page  */}
        {/* <Route path="/" ecact component={PageOne} /> */}
        {/*README.md 2 If you remove the exact from the following 
         localhost:3000/pagetwo then both component will upload in page.
        */}
        <Route path="/" exact component={PageOne} />
        {/** README.md 3 If your write P capital letter Path="/pagetwo
         * localhost:3000/ then both component will router in same page */}
        <Route path="/pagetwo" component={PageTwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
