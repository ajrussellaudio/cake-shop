import React from "react";
import PropTypes from "prop-types";
import CakeListItem from "./CakeListItem";
import "./CakeList.css";

const CakeList = ({ cakes }) => (
  <ul id="cake-list">
    {cakes.map(cake => (
      <li key={cake.id}>
        <CakeListItem {...cake} />
      </li>
    ))}
  </ul>
);

CakeList.propTypes = {
  cakes: PropTypes.array.isRequired
};

export default CakeList;
