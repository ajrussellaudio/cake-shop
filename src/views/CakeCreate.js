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

  handleNameChange = () => {};
  handleCommentChange = () => {};
  handleImageUrlChange = () => {};
  handleYumFactorChange = () => {};

  render() {
    return (
      <NewCakeForm
        {...this.state}
        onSubmit={this.handleFormSubmit}
        onNameChange={this.handleNameChange}
        onCommentChange={this.handleCommentChange}
        onImageUrlChange={this.handleImageUrlChange}
        onYumFactorChange={this.handleYumFactorChange}
      />
    );
  }
}

export default CakeCreate;
