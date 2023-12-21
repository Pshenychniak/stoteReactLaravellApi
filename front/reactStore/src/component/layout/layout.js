import React from 'react';
import Info from '../header/header_top/info';
import Menu from '../header/header_buttom/menu';
import Logo from '../header/header_midle/Logo/logo';
import Search from '../header/header_midle/Search/search';
import Cart from '../header/header_midle/Cart/cart';
import style from './layout.module.css'
import LogoF from '../../component/footer/Logo/logo'
import MenuF from '../footer/menuFooter/menu_footer'
import Social from '../footer/social/social'

function Layout(props) {
  return (
    <>
    <div className={style.header}>
      <div className={style.headerTop}>
        <Info/>
      </div>
      <div className={style.headerMidle}>
        <Logo/>
        <Search/>
        <Cart/>
      </div>
      <div className={style.headerButtom}>
          <Menu/>
      </div> 
    </div>   

    <div className={style.content}>
        {props.children}
    </div>

    <div className={style.footer}> 
      <LogoF/>
      <MenuF/>
      <Social/>
    </div>
    </>
  );
}

export default Layout;