import React, { useState, useEffect } from 'react';
import Layout from '../component/layout/layout';
import style from './cart.module.css';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';



import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Img from '../elements/Img/img';
import { useParams } from 'react-router-dom';


function Cart(props) {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/product/${id}`)
      .then(res => res.json())
      .then(json => setProduct(json))
  }, []);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/product')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, []);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/review')
      .then(res => res.json())
      .then(json => setReviews(json))
  }, []);

  
  const addToCart = () => {
    const productId = id;
    const quantity = 1;
    let newSessionId;
  
    // Зчитати sessionId з кукісів
    const sessionId = getSessionIdFromCookies();
  
    // Якщо sessionId не існує, згенерувати його
    if (!sessionId) {
      newSessionId = generateSessionId();
      // Зберегти новий sessionId у кукісах
      document.cookie = `sessionId=${newSessionId}; path=/`;
    }
  
    // Викликати API з sessionId
    fetch(`http://127.0.0.1:8000/api/cart/add/${productId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionId || newSessionId}`, // Використовувати існуючий sessionId або новий
      },
      body: JSON.stringify({ quantity }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  // Функція для зчитування sessionId з кукісів
  const getSessionIdFromCookies = () => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'sessionId') {
        return value;
      }
    }
    return null;
  };
  
  // Функція для генерації нового sessionId
  const generateSessionId = () => {
    return uuidv4(); // Генерація нового унікального ідентифікатора
  };
  // console.log(product);
  const swiperListProduct = products.map((product) =>
    <SwiperSlide>
      <a href={`/cart/${product.id}`} className={style.link} onClick={window.scrollTo(0, 0)}>
        <div className={style.sliderImg} >
          <Img src={"/images/" + product.main_img} alt="cpu2" />
          <p>{product.title} <br /> <span>Price: {product.price}$</span></p>
        </div>
      </a>
    </SwiperSlide>
  );



  return (
    <>
      <Layout>
        <div className={style.contain}>
          <div className={style.cart}>
            <div className={style.swiper}  >
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className={style.swiper}
              >
                <SwiperSlide className={style.slide}>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Img src={"/images/" + product.main_img} alt="cpu1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Img src={"/images/" + product.second_img} alt="cpu2" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={style.productInfo}>
              <h1>{product.title}</h1>
              <p>Price: <span>{product.price} $</span>
                <span className={style.prodStat} style={product.status_id === 1 ? { color: 'green' } : { color: 'orange' }}>
                  <br />{product.status ? product.status.name : 'Unknown'}
                </span>
              </p>

              <button className={style.btn} onClick={addToCart}>Add to cart</button>
              <p>
                {product.description}
              </p>

            </div>
            <div>
              <h2>Методи доставки:</h2>
              <ul>
                <li> Самовивіз з точок видачі</li>
                <li> Доставка кур'єром Meest ПОШТА, Нової Пошти</li>
                <li> Самовивіз з відділень поштових операторів Meest ПОШТА, Нової Пошти</li>
              </ul>
            </div>

            <div>
              <h2>Способи оплати:</h2>
              <ul>
                <li>Оплата під час отримання товару</li>
                <li>Оплата карткою у відділенні</li>
                <li>Картою онлайн</li>
                <li>Безготівковими для юридичних осіб</li>
              </ul>
            </div>
          </div>
          <div className={style.resp}>
            <h2>Відгуки</h2>
            {reviews.map((review, index) => (
              <div key={index} className={style.respCart}>
                <p><b>{review.nickname}</b></p>
                <p>{review.review}</p>
                <p>Rating <span className={style.restRating}>{review.rating}/10</span></p>
              </div>
            ))}
          </div>
          <div className={style.swiperSecondary} >
            <h1>Також вас можуть зацікавити</h1>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={5}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >

              {swiperListProduct}
            </Swiper>
          </div>
          {isModalOpen && (
            <div className={style.modal}>
              <div className={style.modalContent}>
                <h2>Товар добавлено в корзину!</h2>
                <p>Товар успішно доданий в корзину</p>
                <button className={style.btn} onClick={closeModal}>Продовжити покупки</button>
              </div>
            </div>
          )}
        </div>

      </Layout>
    </>
  );
}

export default Cart;