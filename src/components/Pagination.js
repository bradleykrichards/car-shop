import React from "react";
import "./styles.css";

const Pagination = ({ carsPerPage, totalCars, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
