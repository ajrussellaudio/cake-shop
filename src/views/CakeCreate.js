import React from "react";
import NewCakeForm from "../components/NewCakeForm";

class CakeCreate extends React.Component {
  state = {
    name: "",
    comment: "",
    imageUrl: "",
    yumFactor: 3
  };

  handleFormSubmit = () => {
    console.log("Form submitted...");
  };

  handlePropertyChange = e => {
    const newState = {};
    const property = e.target.name;
    newState[property] = e.target.value;
    this.setState(newState);
  };

  render() {
    return (
      <NewCakeForm
        {...this.state}
        onSubmit={this.handleFormSubmit}
        onPropertyChange={this.handlePropertyChange}
      />
    );
  }
}

export default CakeCreate;
