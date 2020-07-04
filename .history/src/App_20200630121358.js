import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Community from "./components/community";
function App() {
  return (
    <Router>
      <div>
        <nav className="flex-row">
          {/* <button type="submit" className="px-4 max-w-md justify-start ">login</button> */}

          <ul className="flex justify-evenly max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl	">
            <li>
              <Link to="/">
                LOGO
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/community">Community</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
