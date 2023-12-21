import React from 'react';
import Img from '../../../../elements/Img/img' 
import logotyp from '../../../../images/logo1.png';
import style from './logo.module.css';
import {NavLink} from 'react-router-dom';

function Logo() {
  return (
    <>
        <div className={style.logo}>
        <NavLink to="/" className={(navData)=> navData.isActive ? style.activeLink : style.link}>
            <Img className={style.logo} src={logotyp} alt="logo"/>
        </NavLink>
        </div>
    </>
  );
}

export default Logo;