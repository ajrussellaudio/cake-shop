import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CakesIndex from "./views/CakesIndex";
import CakeView from "./views/CakeView";

const App = () => (
  <Router>
    <div className="App">
      <header>
        <Link to="/">
          <h1>Cakes!</h1>
        </Link>
        <Link to="/cakes/new" className="new-cake">
          New Cake
        </Link>
      </header>
      <Route exact path="/" component={CakesIndex} />
      <Route path="/cakes/:id" component={CakeView} />
    </div>
  </Router>
);

export default App;
