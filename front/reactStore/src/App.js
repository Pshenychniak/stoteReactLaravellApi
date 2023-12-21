import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './page/home';
import CardProduct from './page/cardProduct';
import Cart from './page/cart';
import Category from './page/category';
import Contact from './page/contact';
import DeliveryPayment from './page/deliveryPayment';
import Card from './page/card';
import Admin from './page/admin/admin';
import AdminProductEdit from './page/admin/admin-product-edit';
import AdminCategoryEdit from './page/admin/admin-category-edit';
import AdminLogin from './page/admin/adminlog';
import AdminRegistration from './page/admin/adminreg';
import AdminOrderEdit from './page/admin/admin-order-edit';
import Cookies from 'js-cookie';

function App() {
  const [loggedIn, setLoggedIn] = useState(() => {
    // Initialize the login state from cookies
    const storedLoggedIn = Cookies.get('loggedIn');
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
  });

  // Use useEffect to update cookies whenever loggedIn changes
  useEffect(() => {
    Cookies.set('loggedIn', JSON.stringify(loggedIn), { expires: 1/24 }); // Set expiration to 7 days
  }, [loggedIn]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardProduct" element={<CardProduct />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/category" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/deliveryPayment" element={<DeliveryPayment />} />
        <Route path="/card" element={<Card />} />
        <Route path="/adminreg" element={<AdminRegistration />} />

        <Route
          path="/adminlog"
          element={
            loggedIn ? (
              <Navigate to="/admin" />
            ) : (
              <AdminLogin setLoggedIn={setLoggedIn} />
            )
          }
        />
        <Route
          path="/admin"
          element={
            loggedIn ? (
              <Admin setLoggedIn={setLoggedIn} />
            ) : (
              <Navigate to="/adminlog" />
            )
          }
        />
        <Route
          path="/admin-product-edit"
          element={
            loggedIn ? (
              <AdminProductEdit />
            ) : (
              <Navigate to="/adminlog" />
            )
          }
        />
        <Route
          path="/admin-category-edit"
          element={
            loggedIn ? (
              <AdminCategoryEdit />
            ) : (
              <Navigate to="/adminlog" />
            )
          }
        />
        <Route
          path="/admin-order-edit"
          element={
            loggedIn ? (
              <AdminOrderEdit />
            ) : (
              <Navigate to="/adminlog" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
