import React from "react";
import PropTypes from "prop-types";

const NewCakeForm = props => (
  <form>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" />
  </form>
);

NewCakeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default NewCakeForm;
