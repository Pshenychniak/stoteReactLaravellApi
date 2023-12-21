import React from 'react';
import {Link } from 'react-router-dom';
import style from './menu.module.css'
import {NavLink} from 'react-router-dom';


function Menu(props) {
  return (
    <>
    <div className={style.headerTop}>
      <ul className={style.infoInner}>
        <li className={style.infoItem}>
          <NavLink to="/" className={(navData)=> navData.isActive ? style.activeLink : style.link}>Home</NavLink>
        </li>
        <li className={style.infoItem}>
          <NavLink to="/cardProduct" className={(navData)=> navData.isActive ? style.activeLink : style.link}>CardProduct</NavLink>
        </li>        
        <li className={style.infoItem}>
          <NavLink to="/category" className={(navData)=> navData.isActive ? style.activeLink : style.link}>Category</NavLink>
        </li>
        <li className={style.infoItem}>
          <NavLink to="/contact" className={(navData)=> navData.isActive ? style.activeLink : style.link}>Contact</NavLink>
        </li>
        <li className={style.infoItem}>
          <NavLink to="/deliveryPayment" className={(navData)=> navData.isActive ? style.activeLink : style.link}>DeliveryPayment</NavLink>
        </li>
        {/* <li className={style.infoItem}>
          <NavLink to={"/cart"} className={(navData)=> navData.isActive ? style.activeLink : style.link}>Cart</NavLink>
        </li> */}
      </ul>
    </div>


    {/* <div>
        <Link to="/"> Home </Link>        
        <Link to="/cardProduct"> CardProduct </Link>
        <Link to="/cart"> Cart </Link>
        <Link to="/category"> Category </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/deliveryPayment"> DeliveryPayment </Link>
    </div> */}
        
    </>
  );
}

export default Menu;