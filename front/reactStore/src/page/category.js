import React, { useState, useEffect } from 'react';
import Layout from '../component/layout/layout';
import style from './category.module.css';
import { NavLink } from 'react-router-dom';
import Img from '../elements/Img/img';

function Category() {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([1]); // Default selected categories
  const [sortBy, setSortBy] = useState('asc'); // Default sorting order

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/product')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/category')
            .then(res => res.json())
            .then(json => setCategories(json));
    }, []);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(categoryId)) {
        // Category is already selected, remove it
        return prevSelectedCategories.filter((id) => id !== categoryId);
      } else {
        // Category is not selected, add it
        return [...prevSelectedCategories, categoryId];
      }
    });
  };

  const handleSortChange = () => {
    setSortBy((prevSortBy) => (prevSortBy === 'asc' ? 'desc' : 'asc'));
  };

  const sortedProducts = products
    .filter((prod) => selectedCategories.includes(prod.category_id))
    .slice() // Create a shallow copy to avoid mutating the original array
    .sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;

      if (sortBy === 'asc') {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });

  const categoryCheckboxes = (
    <>
      {categories.map((category) => (
        <label key={category.id} className={style.label}>
          <input 
            type="checkbox"
            className={style.checkbox}
            value={category.id}
            checked={selectedCategories.includes(category.id)}
            onChange={() => handleCategoryChange(category.id)}
          />
          {category.name}
        </label>
      ))}
    </>
  );

  const productList = sortedProducts.map((product) => (
    <li key={product.id} className={style.li}>
      <div className={style.cart}>
        <NavLink to={`/cart/${product.id}`} className={style.link}>
          <Img className={style.img} src={`/images/${product.main_img}`} alt="cpu"></Img>
          <h5 className={style.title}>
            {product.title.length > 25 ? product.title.slice(0, 20) + '...' : product.title}
          </h5>
          <p>
            Price: <span className={style.price}>{product.price} $</span>
            <span
              className={style.prodStat}
              style={product.status_id === 1 ? { color: 'green' } : { color: 'orange' }}
            >
              <br />
              {product.status.name}
            </span>
          </p>
          <button className={style.btn}>Buy</button>
        </NavLink>
      </div>
    </li>
  ));

  return (
    <>
      <Layout>
        <div >
          <div className={style.checkboxes}>
            {categoryCheckboxes}
            <button className={style.btnsort} onClick={handleSortChange}>
            Sort by Price {sortBy === 'asc' ? 'Ascending' : 'Descending'}
          </button>
          </div>
          <div className={style.contain}>
            <ul className={style.list}>{productList}</ul>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Category;
