import React, { useState, useEffect } from 'react';
import Layout from '../component/layout/layout';
import Img from '../elements/Img/img';
import style from './cartProduct.module.css';
import { NavLink } from 'react-router-dom';
// import core from '../../public'

function CardProduct() {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/product')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, []);
 
  const listProduct = products.map((product) =>
    <li key={product.id} className={style.li}>
      <div className={style.cart}>
        <NavLink to={`/cart/${product.id}`} className={style.link}>
          <div className={style.test} >

            <Img className={style.img} src={"/images/" + product.main_img} alt="cpu"></Img>
          </div>
          <h3 className={style.title}>{product.title}</h3>
          <p>Price: <span className={style.price}>{product.price} $</span>
          <span className={style.prodStat} style={product.status_id===1?{ color: 'green' }:{ color: 'orange' }}><br />{product.status.name}</span></p>
          <button className={style.btn}>Buy</button>
        </NavLink>
      </div>
    </li>
  );
  return (
    <>
      <Layout>
        <div className={style.contain}>
          <ul className={style.list}>{listProduct}</ul>
        </div>
      </Layout>
    </>
  );
}

export default CardProduct;