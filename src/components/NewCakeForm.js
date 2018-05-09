import React from "react";
import PropTypes from "prop-types";

const NewCakeForm = props => (
  <form>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" />
    <label htmlFor="comment">Comment</label>
    <textarea name="comment" id="comment" cols="30" rows="10" />
  </form>
);

NewCakeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default NewCakeForm;
