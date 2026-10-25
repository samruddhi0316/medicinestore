import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>💊 MedStore</h2>

      <ul>
        <li>
          <Link to="/">🏠 Dashboard</Link>
        </li>

        <li>
          <Link to="/medicines">💊 Medicines</Link>
        </li>

        <li>
          <Link to="/add-medicine">➕ Add Medicine</Link>
        </li>

        <li>
          <Link to="/categories">📂 Categories</Link>
        </li>

        <li>
          <Link to="/add-category">➕ Add Category</Link>
        </li>

        <li>
          <Link to="/orders">🛒 Orders</Link>
        </li>

        <li>
          <Link to="/add-order">➕ Add Order</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;