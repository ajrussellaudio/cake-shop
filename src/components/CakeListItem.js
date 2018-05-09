import React from "react";
import { Link } from "react-router-dom";
import "./CakeListItem.css";
import sample from "lodash.sample";

const randomColour = () =>
  sample(["pink", "yellow", "green", "blue", "purple"]);

const CakeListItem = ({ imageUrl, name, id }) => (
  <Link to={`/cakes/${id}`}>
    <div className={`cake ${randomColour()}`}>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </div>
  </Link>
);

export default CakeListItem;
