import React from "react";
import { Redirect } from "react-router-dom";
import NewCakeForm from "../components/NewCakeForm";

class CakeCreate extends React.Component {
  state = {
    name: "",
    comment: "",
    imageUrl: "",
    yumFactor: 3,
    formSent: false
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const baseUrl =
      "http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api";
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${baseUrl}/cakes`);
    xhr.addEventListener("load", () => {
      // eslint-disable-next-line
      if (xhr.status == 201) {
        this.setState({ formSent: true });
      }
    });
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(this.state));
  };

  handlePropertyChange = event => {
    const newState = {};
    const property = event.target.name;
    const value =
      event.target.type === "number"
        ? parseInt(event.target.value, 10)
        : event.target.value;
    newState[property] = value;
    this.setState(newState);
  };

  render() {
    if (this.state.formSent) return <Redirect to="/" />;
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
