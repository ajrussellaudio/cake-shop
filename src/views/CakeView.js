import React from "react";
import CakeDetail from "../components/CakeDetail";

class CakeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const baseUrl =
      "http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api";
    const id = this.props.match.params.id;
    fetch(`${baseUrl}/cakes/${id}`)
      .then(res => res.json())
      .then(cake => this.setState({ ...cake }));
  }

  render() {
    if (!this.state.id) return null;
    return <CakeDetail {...this.state} />;
  }
}

export default CakeView;
