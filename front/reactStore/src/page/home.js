import React from 'react';
// import {Link } from 'react-router-dom';
import Layout from '../component/layout/layout';
import { useState, useEffect } from 'react';


import { NavLink } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Img from '../elements/Img/img';
import style from './home.module.css';

function Home() {


  //тягне з лари
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/product')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, []);


  
//відгуки з лари
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/review')
      .then(res => res.json())
      .then(json => setReviews(json))
  }, []);

  const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/cart')
            .then(res => res.json())
            .then(json => setCartItems(json))
    }, []);

  const swiperListProduct = products.slice(0, 5).map((product) =>
    <SwiperSlide>
      <NavLink to={`/cart/${product.id}`} className={style.link} onClick={window.scrollTo(0, 0)}>
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
          <Img src={"/images/" + product.main_img} alt="cpu2" className={style.img} />
          <p>{product.title} <br /> <span>Price: {product.price}$</span></p>
          <br />
        </div>
      </NavLink>
    </SwiperSlide>
  );
  const listProduct = products.slice(8, 13).map((product) =>
    <li key={product.id} className={style.li}>
      <div className={style.cart}>
        <NavLink to={`/cart/${product.id}`} className={style.link}>
          <Img className={style.img} src={"/images/" + product.main_img} style={{ height: '200px' }} alt="cpu"></Img>
          <h5 className={style.title}>{product.title.length>25 ? product.title.slice(0, 27) + "...":product.title }</h5>
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
          <div className={style.swiperTop}>
            <h1>Хіти продаж:</h1>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >

              {swiperListProduct}
              
            </Swiper>
          </div>
          <div className={style.blok}>
            <h1>Рекомендовані:</h1>
            <ul className={style.list}>{listProduct}</ul>
          </div>
          <div className={style.blok}>
            <h1>Останні:</h1>
            <ul className={style.list}>{listProduct}</ul>
          </div>

          <br></br>
          <div className={style.blok}>
            <div className={style.resp}>
              <h1>Відгуки:</h1>
              {reviews.map((review, index) => (
                <div key={index} className={style.respCart}>
                  <p><b>{review.nickname}</b></p>
                  <p>{review.review}</p>
                  <p>Rating <span className={style.restRating}>{review.rating}/10</span></p>
                </div>
              ))}
            </div>

            <br></br>
          </div>
          <div className={style.blok}>
            <div className={style.aboutUs}>

              <h1>Про нас</h1>
              <p>
                Ми - ваш надійний партнер з комп'ютерними комплектуючими. Наша компанія надає широкий асортимент
                високоякісних комплектуючих для комп'ютерів за доступними цінами.
              </p>
              <h2>Наша мета − бути корисними</h2>
              <p>
                Ми віримо, що речі існують для того, щоб робити життя простішим, приємнішим і добрішим. Тому й пошук тієї самої речі повинен бути швидким, зручним і приємним. Ми не просто продаємо комп'ютерні комплектуючі. Ми допомагаємо знайти саме те, що треба, в одному місці та без зайвих хвилювань, щоб ви не витрачали життя на пошуки, а просто жили щасливо. My Computer − це універсальна відповідь на будь-який запит, початок пошуку та його кінцева зупинка, справжній помічник. Ми назавжди позбавляємо своїх покупців від неприємних компромісів, виконуємо бажання і даємо змогу мріяти сміливіше. Завдяки розумному пошуку та чесному сервісу ми робимо життя наших клієнтів трішки кращим просто зараз.
              </p>
              <h2>Щастя починається з простих речей</h2>
              <p>
                І ми допомагаємо ці речі знайти: закоханим підказуємо, чим здивувати один одного; спортивних мотивуємо ніколи не здаватись і швидше прогресувати; хазяйновитим даємо можливість створити справжній затишок. Ми хочемо, щоб ви знали, що шукаєте, і могли аргументувати свій вибір. Для цього ми знімаємо відеоогляди, пишемо статті та відстежуємо новинки.        </p>

              <h2>Зручна доставка</h2>
              <p>
                І звичайно, будь-який товар можна замовити з доставкою. Ми доставляємо замовлення по Києву протягом одного дня, а по Україні − на наступний день. Усе − без передоплати, якщо потрібно − у кредит. Оплата готівкова або безготівкова − як вам зручніше.        </p>
            </div>

          </div>

        </div>
      </Layout>


    </>
  );
}

export default Home;