import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import "./styles.css";

const ProductPage = ({ cars }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(3);

  // Get current cars
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="product-page">
      <h2>Our Cars</h2>
      <div className="product-grid">
        {currentCars.map((car) => (
          <ProductCard key={car.id} product={car} />
        ))}
      </div>
      <Pagination
        carsPerPage={carsPerPage}
        totalCars={cars.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ProductPage;
