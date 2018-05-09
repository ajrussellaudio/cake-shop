import React from "react";
import CakeList from "./components/CakeList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Cakes!</h1>
        <CakeList cakes={[]} />
      </div>
    );
  }
}

export default App;
