import React from "react";
import "./SingleService.css";
import { Link } from "react-router-dom";
const SingleService = ({ service }) => {
  const { key, name, details, img } = service;
  return (
    <div className="service pb-3 p-3">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p className="px-3">{details}</p>
      <Link to={`/appoint/${key}`}>
        <button className="btn btn-warning">Take Help</button>
      </Link>
    </div>
  );
};

export default SingleService;
