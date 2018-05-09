import React from "react";
import PropTypes from "prop-types";
import CakeListItem from "./CakeListItem";

const CakeList = ({ cakes }) => (
  <ul>
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
