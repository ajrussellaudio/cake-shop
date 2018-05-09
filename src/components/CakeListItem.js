import React from "react";
import "./CakeListItem.css";
import sample from "lodash.sample";

const randomColour = () =>
  sample(["pink", "yellow", "green", "blue", "purple"]);

const CakeListItem = ({ imageUrl, name }) => (
  <div className={`cake ${randomColour()}`}>
    <img src={imageUrl} alt={name} />
    <p>{name}</p>
  </div>
);

export default CakeListItem;
