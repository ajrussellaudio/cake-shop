import React from "react";
import PropTypes from "prop-types";

const CakeList = props => (
  <div>
    <h3>CakeList</h3>
  </div>
);

CakeList.propTypes = {
  cakes: PropTypes.array.isRequired
};

export default CakeList;
