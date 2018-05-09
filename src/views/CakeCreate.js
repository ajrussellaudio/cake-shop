import React from "react";
import NewCakeForm from "../components/NewCakeForm";

const handleFormSubmit = () => {
  console.log("Form submitted...");
};

const CakeCreate = () => <NewCakeForm onSubmit={handleFormSubmit} />;

export default CakeCreate;
