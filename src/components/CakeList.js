import React from "react";
import PropTypes from "prop-types";

const CakeList = ({ cakes }) => (
  <ul>
    {cakes.map(cake => (
      <li key={cake.id}>
        <div>
          <img src={cake.imageUrl} alt={cake.name} />
          <p>{cake.name}</p>
        </div>
      </li>
    ))}
  </ul>
);

CakeList.propTypes = {
  cakes: PropTypes.array.isRequired
};

export default CakeList;
