import React from "react";

const CakeView = ({ match }) => {
  console.log(match.params.id);
  return <h1>CakeView: {match.params.id}</h1>;
};

export default CakeView;
