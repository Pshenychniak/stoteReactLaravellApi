import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu(props) {
  const handleLogout = () => {
    // Ваш код для виходу
    // Наприклад, змініть значення loggedIn в куках
    document.cookie = "loggedIn=false; path=/"; // Припустимо, що ви використовуєте куки
    // Додайте інші дії, які потрібно виконати при виході
    window.location.reload();
  };

  return (
    <div className="sidebar pt-5 fs-3 bg-dark sticky-top" style={{ height: '100vh' }}>
      <ul className="nav flex-column ">
        <li className="nav-item ">
          <NavLink to="/" className="nav-link text-white">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin-product-edit" className={(navData) => navData.isActive ? 'nav-link text-primary' : 'nav-link text-white'}>
            Product Edit
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin-category-edit" className={(navData) => navData.isActive ? 'nav-link text-primary' : 'nav-link text-white'}>
            Category Edit
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin-order-edit" className={(navData) => navData.isActive ? 'nav-link text-primary' : 'nav-link text-white'}>
            Order Edit
          </NavLink>
        </li>
        <li className="nav-item">
          <button className="nav-link btn btn-link text-white" onClick={handleLogout}>
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
