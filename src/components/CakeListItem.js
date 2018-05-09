import React from "react";

const CakeListItem = ({ imageUrl, name }) => (
  <div>
    <img src={imageUrl} alt={name} />
    <p>{name}</p>
  </div>
);

export default CakeListItem;
