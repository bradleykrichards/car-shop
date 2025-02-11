import React from "react";
import "./styles.css";

const Help = () => {
  return (
    <div className="help-page">
      <h2>Shipping Information</h2>
      <p>We offer the following shipping options:</p>
      <ul>
        <li>
          <strong>Standard Shipping:</strong> 5-7 business days (R 100)
        </li>
        <li>
          <strong>Express Shipping:</strong> 2-3 business days (R 250)
        </li>
        <li>
          <strong>Overnight Shipping:</strong> Next business day (R 500)
        </li>
      </ul>
    </div>
  );
};

export default Help;
