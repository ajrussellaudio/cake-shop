import React from "react";
import CakeDetail from "../components/CakeDetail";

class CakeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`/api/cakes/${id}`)
      .then(res => res.json())
      .then(cake => this.setState({ ...cake }));
  }

  render() {
    if (!this.state.id) return null;
    return <CakeDetail {...this.state} />;
  }
}

export default CakeView;
