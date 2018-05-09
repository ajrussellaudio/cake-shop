import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CakesIndex from "./views/CakesIndex";
import CakeView from "./views/CakeView";
import CakeCreate from "./views/CakeCreate";

const App = () => (
  <Router>
    <div className="App">
      <header>
        <Link to="/">
          <h1>Cakes!</h1>
        </Link>
        <Link to="/new" className="new-cake">
          New Cake
        </Link>
      </header>
      <Route exact path="/" component={CakesIndex} />
      <Route exact path="/new" component={CakeCreate} />
      <Route exact path="/cakes/:id" component={CakeView} />
    </div>
  </Router>
);

export default App;
