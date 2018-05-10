import React from "react";
import CakeList from "../components/CakeList";

class CakesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cakes: []
    };
  }

  componentDidMount() {
    fetch(`/api/cakes`)
      .then(res => res.json())
      .then(cakes => this.setState({ cakes: cakes }));
  }

  render() {
    return <CakeList cakes={this.state.cakes} />;
  }
}

export default CakesIndex;
