import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import Register from "./components/Register";
import Login from "./components/Login";
import Help from "./components/Help";
import "./App.css";

import LandRover from "./images/Land_Rover.jpg";
import MercedesC200 from "./images/Marcedes_benz_c200.jpg";
import MercedesGWagon from "./images/Mercedes_Benz_G-wagon.jpg";
import LamborghiniUrus from "./images/Lamborghini_urus.jpg";
import BMWM2 from "./images/BMW M2.jpg";
import AudiRS3 from "./images/Audi_rs3.jpg";
import ToyotaCorolla from "./images/toyota_corolla.jpg"; // Fixed case
import ToyotaEtios from "./images/toyota etios.jpg";
import KiaPicanto from "./images/kia picanto.jpg";

const App = () => {
  const [cars] = useState([
    {
      id: 1,
      name: "Land Rover",
      price: 1200000,
      image: LandRover,
      description: "Luxury SUV with advanced features.",
    },
    {
      id: 2,
      name: "Mercedes Benz C200",
      price: 800000,
      image: MercedesC200,
      description: "Elegant sedan with premium comfort.",
    },
    {
      id: 3,
      name: "Mercedes Benz G-Wagon",
      price: 2500000,
      image: MercedesGWagon,
      description: "Iconic luxury SUV with unmatched performance.",
    },
    {
      id: 4,
      name: "Lamborghini Urus",
      price: 4500000,
      image: LamborghiniUrus,
      description: "Exquisite super SUV with breathtaking design.",
    },
    {
      id: 5,
      name: "BMW M2",
      price: 1100000,
      image: BMWM2,
      description: "Sporty coupe with dynamic driving experience.",
    },
    {
      id: 6,
      name: "Audi RS3",
      price: 950000,
      image: AudiRS3,
      description: "Compact luxury sedan with powerful performance.",
    },
    {
      id: 7,
      name: "Toyota Corolla",
      price: 350000,
      image: ToyotaCorolla,
      description: "Reliable and fuel-efficient compact car.",
    },
    {
      id: 8,
      name: "Toyota Etios",
      price: 250000,
      image: ToyotaEtios,
      description: "Affordable and practical hatchback.",
    },
    {
      id: 9,
      name: "Kia Picanto",
      price: 200000,
      image: KiaPicanto,
      description: "Compact city car with modern features.",
    },
  ]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<ProductPage cars={cars} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
};

export default App;
