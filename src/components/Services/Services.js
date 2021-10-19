import React, { useEffect, useState } from "react";
import "./Services.css";
import SingleService from "./SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services">
      <h2 className="text-primary mt-5">We are here for you</h2>
      <div className="service-container">
        {services.map((service) => (
          <SingleService key={service.key} service={service}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;
