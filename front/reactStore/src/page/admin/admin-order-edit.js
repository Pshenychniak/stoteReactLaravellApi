// App.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLayout from '../../component/layout/admin-layout';

const AdminOrderEdit = () => {
    const [products, setProducts] = useState([]);
    const [orderItems, setOrderItems] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/product')
            .then(res => res.json())
            .then(json => setProducts(json));

        fetch('http://127.0.0.1:8000/api/orderitem')
            .then(res => res.json())
            .then(json => setOrderItems(json));

        fetch('http://127.0.0.1:8000/api/order')
            .then(res => res.json())
            .then(json => setOrders(json));

    }, []);



    const [newOrderId, setNewOrderId] = useState('');
    const [newProductId, setNewProductId] = useState('20');
    const [newQuantity, setNewQuantity] = useState('');
    const [newPrice, setNewPrice] = useState('');


    const addOrderItem = () => {

        fetch('http://127.0.0.1:8000/api/orderitem', {
            method: 'POST',
            body: JSON.stringify({
                order_id: newOrderId,
                product_id: newProductId,
                quantity: newQuantity,
                price: newPrice,
            }),
            headers: {
                'Content-Type': 'application/json',
                "charset": "utf-8"
            },
        })
            .then(res => res.json())
            .then(data => {
                setOrderItems([...orderItems, data]);
                setNewPrice('');
                setNewQuantity('');
                setNewProductId('');
                setNewOrderId('');
            })

    }

    const updateOrderItem = (id) => {
        const orderItem = orderItems.find(orderItem => orderItem.id === id)
        fetch(`http://127.0.0.1:8000/api/orderitem/${id}`, {
            method: 'PUT',
            body: JSON.stringify(orderItem),
            headers: {
                'Content-Type': 'application/json',
                "charset": "utf-8"
            },
        })
            .then(res => res.json())
    }
    const deleteOrderItem = (id) => {
        fetch(`http://127.0.0.1:8000/api/orderitem/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => {
                setOrderItems(values => {
                    return values.filter(orderItem => orderItem.id !== id)
                })
            })
    }




    const onChangeHandler = (id, key, value) => {
        setOrderItems(values => {
            return values.map(orderItem => {
                if (orderItem.id === id) {
                    return { ...orderItem, [key]: value };
                }
                return orderItem;
            })
        })
    }



    return (
        <AdminLayout>
        <div className="container mt-4">
            <h1>Order Edit</h1>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>order_id</th>
                        <th>product</th>
                        <th>quantity</th>
                        <th>price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orderItems.map((orderItem) => (
                        <tr key={orderItem.id}>
                            <td>{orderItem.id}</td>
                            <td>
                                {/* {product.title} */}
                                <input
                                    type="number"
                                    value={orderItem.order_id}
                                    onChange={(e) => onChangeHandler(orderItem.id, "order_id", e.target.value)} />
                            </td>
                            <td><select value={orderItem.product_id} onChange={(e) => onChangeHandler(orderItem.id, "product_id", e.target.value)}>
                                {products.map((product) => (
                                    product.id === orderItem.product_id ?
                                        <option value={product.id} selected> {product.id + ". " + product.title}</option> :
                                        <option value={product.id}>{product.id + ". " + product.title}</option>
                                ))}
                            </select></td>
                            <td>
                                {/* {product.main_img} */}
                                <input
                                    type="number"
                                    value={orderItem.quantity}
                                    onChange={(e) => onChangeHandler(orderItem.id, "quantity", e.target.value)} />
                            </td>
                            <td>
                                {/* {product.second_img} */}
                                <input
                                    type="number"
                                    value={orderItem.price}
                                    onChange={(e) => onChangeHandler(orderItem.id, "price", e.target.value)} />
                            </td>

                            {/* <td><select name="category_id" id="category_id" value={product.category_id} onChange={(e) => onChangeHandler(product.id, "category_id", e.target.value)}>
                                {categories.map((type) => (
                                    type.id === product.category_id ?
                                        <option value={type.id} selected>{type.name}</option> :
                                        <option value={type.id}>{type.name}</option>
                                ))}
                            </select></td> */}

                            <td>
                                <button className='btn btn-outline-warning' onClick={() => updateOrderItem(orderItem.id)}>Edit</button>
                                <button className="btn btn-outline-danger" onClick={() => deleteOrderItem(orderItem.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot className="table-primary">
                    <tr>
                        <th>
                        </th>
                        <th>
                            <input
                                type="number"
                                value={newOrderId}
                                onChange={(e) => setNewOrderId(e.target.value)}
                            />
                        </th>
                        <th>
                            <select name="product_id" id="product_id" value={newProductId} onChange={(e) => setNewProductId(e.target.value)}>
                                {products.map((product) => (
                                    <option value={product.id}>{product.id + ". " + product.title}</option>
                                ))}
                            </select>
                        </th>
                        <th>
                            <input
                                type="number"
                                value={newQuantity}
                                onChange={(e) => setNewQuantity(e.target.value)}
                            />
                        </th>
                        <th>
                            <input
                                type="number"
                                value={newPrice}
                                onChange={(e) => setNewPrice(e.target.value)}
                            />
                        </th>

                        <th>
                            <button className='btn btn-success' onClick={addOrderItem}>Add</button>
                        </th>
                    </tr>
                </tfoot>

            </table>
        </div>
        </AdminLayout>
    );
}

export default AdminOrderEdit;
