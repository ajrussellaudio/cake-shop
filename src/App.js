import React from "react";
import CakeList from "./components/CakeList";

class App extends React.Component {
  state = {
    cakes: []
  };

  componentDidMount() {
    const baseUrl =
      "http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api";
    fetch(`${baseUrl}/cakes`)
      .then(res => res.json())
      .then(cakes => this.setState({ cakes: cakes }));
  }

  render() {
    return (
      <div className="App">
        <h1>Cakes!</h1>
        <CakeList cakes={this.state.cakes} />
      </div>
    );
  }
}

export default App;
