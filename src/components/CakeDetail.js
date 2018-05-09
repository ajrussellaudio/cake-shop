import React from "react";
import "./CakeDetail.css";

const CakeDetail = ({ name, imageUrl, comment, yumFactor }) => (
  <div className="cake-detail" style={{ backgroundImage: `url(${imageUrl})` }}>
    <h3>{name}</h3>
    <p className="comment">{comment}</p>
    <p className="yum-factor">Yum Factor: {yumFactor}</p>
  </div>
);

export default CakeDetail;
