import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CakesIndex from "./components/CakesIndex";

const App = () => (
  <Router>
    <div className="App">
      <h1>Cakes!</h1>
      <Route exact path="/" component={CakesIndex} />
    </div>
  </Router>
);

export default App;
