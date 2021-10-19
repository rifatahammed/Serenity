import React from "react";
import { Link } from "react-router-dom";
import forofor from "./../../images/404.jpg";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="notFound">
      <img src={forofor} alt="" />
      <br />
      <Link to="/">
        <button>Go back to home</button>
      </Link>
    </div>
  );
};

export default NotFound;
