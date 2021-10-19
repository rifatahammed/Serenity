import React from "react";
import { useParams } from "react-router";
const Appoint = () => {
  const { appointId } = useParams();
  return (
    <div>
      <h1>Hi there</h1>
      <h2>Appoint for: {appointId}</h2>
    </div>
  );
};

export default Appoint;
