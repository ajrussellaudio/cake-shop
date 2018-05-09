import React from "react";
import CakeList from "../components/CakeList";

class CakesIndex extends React.Component {
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
    return <CakeList cakes={this.state.cakes} />;
  }
}

export default CakesIndex;
