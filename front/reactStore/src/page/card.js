import React, { useState, useEffect } from 'react';
import style from './card.module.css'

import Layout from '../component/layout/layout';

const Card = () => {
    const [cartItems, setCartItems] = useState([]);
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

    useEffect(() => {
        const sessionId = getSessionIdFromCookies();

        fetch('http://127.0.0.1:8000/api/cart', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionId}`,
            },
        })
            .then((res) => res.json())
            .then((json) => setCartItems(json))
            .catch((error) => console.error('Error:', error));
    }, []);

    const updateQuantity = (productId, newQuantity) => {
        const sessionId = getSessionIdFromCookies();

        fetch(`http://127.0.0.1:8000/api/cart/updateQuantity/${productId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionId}`,
            },
            body: JSON.stringify({ quantity: newQuantity }),
        })
            .then((res) => res.json())
            .then((json) => setCartItems(json))
            .catch((error) => console.error('Error:', error));
    };

    const removeItem = (productId) => {
        const sessionId = getSessionIdFromCookies();

        fetch(`http://127.0.0.1:8000/api/cart/removeItem/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionId}`,
            },
        })
            .then((res) => {
                if (res.status === 204) {
                    // Сервер успішно видалив товар
                    setCartItems((prevItems) =>
                        prevItems.filter((item) => item.product.id !== productId)
                    );
                } else {
                    // Помилка видалення товару
                    console.error('Error:', res.statusText);
                }
            })
            .catch((error) => console.error('Error:', error));
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, cartItem) => {
            // Додавання ціни кожного продукту, помноженої на кількість
            return total + cartItem.product.price * cartItem.quantity;
        }, 0); // Початкова сума рівна 0
    };


    const placeOrder = () => {
        const sessionId = getSessionIdFromCookies();

        fetch('http://127.0.0.1:8000/api/cart/placeOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionId}`,
            },
        })
            .then((res) => {
                if (res.status === 200) {
                    // Замовлення успішно оформлено, видаліть товари з корзини
                    setCartItems([]);
                    // setIsModalOpen(true); // Покажіть повідомлення про успішне оформлення замовлення
                } else {
                    // Помилка оформлення замовлення
                    console.error('Error:', res.statusText);
                }
            })
            .catch((error) => console.error('Error:', error));
    };

    return (
        <Layout>
            <div className={style.contain}>
                <div className={style.table}>
                    <table className={1} >
                        <thead className={style.thead}>
                            <tr className={style.tere}>
                                <th className={style.tede}>Продукти</th>
                                <th className={style.tede}>Ціна</th>
                                <th className={style.tede}>Кількість</th>
                                <th className={style.tede}>Загальна ціна</th>
                                <th className={style.tede}>Вилучити</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((cartItem) => (
                                <tr key={cartItem.id} className={style.tere}>
                                    <td className={style.tede}>
                                        <img src={"/images/" + cartItem.product.main_img} style={{ width: "100px" }} alt={cartItem.product.title} />
                                        {cartItem.product.title}
                                    </td>
                                    <td className={style.tede}>{cartItem.product.price} $</td>
                                    <td className={style.tede}>
                                        <div>
                                            <button className={style.btnPM} onClick={() => updateQuantity(cartItem.product.id, cartItem.quantity - 1)}>-</button>
                                            {cartItem.quantity}
                                            <button className={style.btnPM} onClick={() => updateQuantity(cartItem.product.id, cartItem.quantity + 1)}>+</button>
                                        </div>
                                    </td>
                                    <td className={style.tede}>{cartItem.product.price * cartItem.quantity} $</td>
                                    <td className={style.tede}><button className={style.btnRemove} onClick={() => removeItem(cartItem.product.id)}>Remove</button></td>
                                </tr>
                            ))
                            }

                        </tbody>
                    </table>
                </div>
                <div className={style.total}>
                    <h2>Total price: {calculateTotalPrice()} $</h2>
                    <button onClick={placeOrder}>Оформити замовлення</button>
                </div>
            </div>
        </Layout>
    );
}

export default Card;
