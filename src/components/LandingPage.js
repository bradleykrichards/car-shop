import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>Welcome to the Car Store</h1>
      <p>
        Find your dream car today! Explore our collection of luxury and
        affordable cars.
      </p>
      <button onClick={() => navigate("/store")}>Explore Cars</button>
    </div>
  );
};

export default LandingPage;
