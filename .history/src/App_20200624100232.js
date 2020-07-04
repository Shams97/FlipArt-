import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
      <Router>
    <div>
        <nav className="flex-column">
          <ul className="flex p-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </Router>

      /* <div className="ml-6 pt-1">
      <h1 className="text-2xl text-blue-700 leading-tight">
        Tailwind and Create React App
      </h1>
      <p className="text-base text-gray-700 leading-normal">
        Building apps together
      </p>      
    </div> */
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
