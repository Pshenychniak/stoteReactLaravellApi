import React, { useState } from 'react';
import Layout from '../component/layout/layout';
import inst from '../images/insta.svg'
import fb from '../images/fb.svg'
import tg from '../images/tg.svg'
import twitt from '../images/twit.svg'
import style from './contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform the fetch request to Laravel API
    fetch('http://127.0.0.1:8000/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Show success alert
        alert('Повідомлення надіслано!');

        // Clear the form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error submitting feedback:', error);
        // Handle error or show an error message to the user
      });
  };
  return (
    <>
      <Layout>
        <div className={style.contain}>
          <div className={style.content}>
            <div>
              <h2>Адреса</h2>
              <p>Ми знаходимося за адресою: м. Тернопіль</p>
              <p>Наш офіс розташований в м. Тернопіль</p>
              <p>Поштовий індекс: 46000</p>
            </div>

            <div>
              <h2>Телефон</h2>
              <p>Зв'яжіться з нами за телефоном: 88005553535</p>
              <p>Графік роботи нашої служби підтримки: Пн-Пт, 9:00 - 18:00</p>
            </div>

            <div>
              <h2>Електронна пошта</h2>
              <p>Напишіть нам на електронну пошту: <a href="mailto:[Адреса електронної пошти]">mypcternopil@gmail.com</a></p>
              <p>Очікуйте відповідь протягом 24 годин.</p>
            </div>
            <div>
              <h2>Соціальні мережі</h2>
              <p>Слідкуйте за нами в соціальних мережах:</p>
              <div className={style.social}>
                <ul className={style.socialUl}>
                  <li className={style.socialLi}>
                    <img className={style.socialLogo} src={inst} alt="logo"></img>
                    <a className={style.socialLink} href='/'>Instagram</a>
                  </li>
                  <li className={style.socialLi}>
                    <img className={style.socialLogo} src={fb} alt="logo"></img>
                    <a className={style.socialLink} href='/'>Facebook</a>
                  </li>
                  <li className={style.socialLi}>
                    <img className={style.socialLogo} src={tg} alt="logo"></img>
                    <a className={style.socialLink} href='/'>Telegram</a>
                  </li>
                  <li className={style.socialLi}>
                    <img className={style.socialLogo} src={twitt} alt="logo"></img>
                    <a className={style.socialLink} href='/'>Twitter</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h1>Зворотній зв'язок</h1>
              <form className={style.form} onSubmit={handleSubmit}>
                <label htmlFor="name">Ім'я:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <br />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <br />

                <label htmlFor="message">Повідомлення:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <br />

                <button type="submit">Надіслати</button>
              </form>
            </div>
          </div>

        </div>


      </Layout>
    </>
  );
}

export default Contact;