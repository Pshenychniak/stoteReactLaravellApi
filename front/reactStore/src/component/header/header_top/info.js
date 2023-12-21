import React from 'react';
import style from './info.module.css'
import {NavLink} from 'react-router-dom';

function Info() {
  return (
    <>
    <div className={style.headerTop}>
      <ul className={style.infoInner}>
        <li className={style.infoItem}>
          <NavLink to="/" className={style.link}>Home</NavLink>
        </li>
        <li className={style.infoItem}>
          <NavLink to="/cardProduct" className={style.link}>CardProduct</NavLink>
        </li>        
        <li className={style.infoItem}>
          <NavLink to="/category" className={ style.link}>Category</NavLink>
        </li>
        <li className={style.infoItem}>
          <NavLink to="/contact" className={style.link}>Contact</NavLink>
        </li>
        <li className={style.infoItem}>
          <NavLink to="/deliveryPayment" className={style.link}>DeliveryPayment</NavLink>
        </li>
        {/* <li className={style.infoItem}>
          <NavLink to="/cart" className={style.link}>Cart</NavLink>
        </li> */}
      </ul>
    </div>
    </>
  );
}

export default Info;