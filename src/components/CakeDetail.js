import React from "react";
import { Link } from "react-router-dom";
import "./CakeDetail.css";

const CakeDetail = ({ name, imageUrl, comment, yumFactor }) => (
  <div className="container">
    <div
      className="cake-detail"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div>
        <h3>{name}</h3>
        <p className="comment">{comment}</p>
        <p className="yum-factor">Yum Factor: {yumFactor}</p>
        <Link to="/">Back to cakes</Link>
      </div>
    </div>
  </div>
);

export default CakeDetail;
