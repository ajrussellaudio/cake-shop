import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CakesIndex from "./views/CakesIndex";
import CakeView from "./views/CakeView";
import CakeCreate from "./views/CakeCreate";

class App extends React.Component {
  state = {
    baseUrl: ""
  };

  render() {
    return (
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
          <Route exact path="/" render={() => <CakesIndex {...this.state} />} />
          <Route
            exact
            path="/new"
            render={() => <CakeCreate {...this.state} />}
          />
          <Route
            exact
            path="/cakes/:id"
            render={match => <CakeView {...this.state} {...match} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
