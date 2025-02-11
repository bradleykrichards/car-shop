import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <div>
        {username ? <p>User: {username}</p> : <Link to="/login">Login</Link>}
      </div>
    </header>
  );
};

export default Header;
