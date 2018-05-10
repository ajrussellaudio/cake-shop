import React from "react";
import PropTypes from "prop-types";

const NewCakeForm = props => (
  <form onSubmit={props.onSubmit}>
    <label htmlFor="name">Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      value={props.name}
      onChange={props.onPropertyChange}
    />

    <label htmlFor="comment">Comment:</label>
    <textarea
      name="comment"
      id="comment"
      cols="30"
      rows="10"
      value={props.comment}
      onChange={props.onPropertyChange}
    />

    <label htmlFor="image-url">Image URL:</label>
    <input
      type="text"
      id="image-url"
      name="imageUrl"
      value={props.imageUrl}
      onChange={props.onPropertyChange}
    />

    <label htmlFor="yum-factor">Yum Factor:</label>
    <input
      type="number"
      id="yum-factor"
      name="yumFactor"
      min={1}
      max={5}
      value={parseInt(props.yumFactor, 10)}
      onChange={props.onPropertyChange}
    />

    <input type="submit" id="submit" value="New Cake" />
  </form>
);

NewCakeForm.propTypes = {
  name: PropTypes.string,
  comment: PropTypes.string,
  imageUrl: PropTypes.string,
  yumFactor: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
  onPropertyChange: PropTypes.func.isRequired
};

export default NewCakeForm;
