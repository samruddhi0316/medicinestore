import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./Pages/Dashboard";

import MedicineList from "./Pages/medicine/MedicineList";
import AddMedicine from "./Pages/medicine/AddMedicine";
import UpdateMedicine from "./Pages/medicine/UpdateMedicine";

import CategoryList from "./Pages/category/CategoryList";
import AddCategory from "./Pages/category/AddCategory";
import UpdateCategory from "./Pages/category/UpdateCategory";

import OrderList from "./Pages/Order/OrderList";
import AddOrder from "./Pages/Order/AddOrder";
import UpdateOrder from "./Pages/Order/UpdateOrder";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Navbar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />

          {/* Medicine */}
          <Route path="/medicines" element={<MedicineList />} />
          <Route path="/add-medicine" element={<AddMedicine />} />
          <Route
            path="/update-medicine/:id"
            element={<UpdateMedicine />}
          />

          {/* Category */}
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route
            path="/update-category/:id"
            element={<UpdateCategory />}
          />

          {/* Order */}
          <Route path="/orders" element={<OrderList />} />
          <Route path="/add-order" element={<AddOrder />} />
          <Route
            path="/update-order/:id"
            element={<UpdateOrder />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;