// App.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLayout from '../../component/layout/admin-layout';
import { v4 as uuidv4 } from 'uuid';

const AdminProductEdit = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategory] = useState([]);
    const [statues, setStatus] = useState([]);

    const [newTitle, setNewTitle] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newMainImg, setNewMainImg] = useState('');
    const [newSecondImg, setNewSecondImg] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newCategoryId, setNewCategoryId] = useState('1');
    const [newStatusId, setNewStatusId] = useState('1');

    


    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/product')
            .then(res => res.json())
            .then(json => setProducts(json));

        fetch(`http://127.0.0.1:8000/api/category`)
            .then(res => res.json())
            .then(json => setCategory(json));

        fetch(`http://127.0.0.1:8000/api/status`)
            .then(res => res.json())
            .then(json => setStatus(json));

    }, []);

    const addProduct = () => {

        fetch('http://127.0.0.1:8000/api/product', {
            method: 'POST',
            body: JSON.stringify({
                title: newTitle,
                price: newPrice,
                main_img: newMainImg,
                second_img: newSecondImg,
                description: newDescription,
                category_id: newCategoryId,
                status_id: newStatusId
            }),
            headers: {
                'Content-Type': 'application/json',
                "charset": "utf-8"
            },
        })
            .then(res => res.json())
            .then(data=>{
                setProducts([...products, data]);
                setNewTitle('');
                setNewPrice('');
                setNewMainImg('');
                setNewSecondImg('');
                setNewDescription('');                
            })
        
    }

    const updateProduct = (id) => {
        const product = products.find(product => product.id === id)
        fetch(`http://127.0.0.1:8000/api/product/${id}`, {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
                "charset": "utf-8"
            },
        })
            .then(res => res.json())
    }
    const deleteProduct = (id) => {
        fetch(`http://127.0.0.1:8000/api/product/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(() => {
            setProducts(values => {
              return values.filter(product => product.id !== id)
            })
          })
      }




    const onChangeHandler = (id, key, value) => {
        setProducts(values => {
            return values.map(product => {
                if (product.id === id) {
                    return { ...product, [key]: value };
                }
                return product;
            })
        })
    }



    return (
        <AdminLayout>
        <div className="container mt-4">
            <h1>Product Edit</h1>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Main Image</th>
                        <th>Second Image</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>
                                <input
                                    type="text"
                                    value={product.title}
                                    onChange={(e) => onChangeHandler(product.id, "title", e.target.value)} />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={product.price}
                                    onChange={(e) => onChangeHandler(product.id, "price", e.target.value)} />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={product.main_img}
                                    onChange={(e) => onChangeHandler(product.id, "main_img", e.target.value)} />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={product.second_img}
                                    onChange={(e) => onChangeHandler(product.id, "second_img", e.target.value)} />
                            </td>
                            <td>
                                <textarea
                                    rows="7"
                                    value={product.description}
                                    onChange={(e) => onChangeHandler(product.id, "description", e.target.value)} />

                            </td>
                            <td><select name="category_id" id="category_id" value={product.category_id} onChange={(e) => onChangeHandler(product.id, "category_id", e.target.value)}>
                                {categories.map((type) => (
                                    type.id === product.category_id ?
                                        <option value={type.id} selected>{type.name}</option> :
                                        <option value={type.id}>{type.name}</option>
                                ))}
                            </select></td>
                            <td><select name="status_id" id="status_id" value={product.status_id} onChange={(e) => onChangeHandler(product.id, "status_id", e.target.value)}>
                                {statues.map((status) => (
                                    status.id === product.status_id ?
                                        <option value={status.id} selected>{status.name}</option> :
                                        <option value={status.id}>{status.name}</option>
                                ))}
                            </select></td>
                            <td>
                                <button className='btn btn-outline-warning' onClick={() => updateProduct(product.id)}>Edit</button>
                                <button className="btn btn-outline-danger" onClick={() => deleteProduct(product.id)}>Delete</button>
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
                             type="text"
                             value={newTitle}
                             onChange={(e) => setNewTitle(e.target.value)}
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
                            <input
                             type="text"
                             value={newMainImg}
                             onChange={(e) => setNewMainImg(e.target.value)}
                            />
                        </th>
                        <th>
                            <input
                             type="text"
                             value={newSecondImg}
                             onChange={(e) => setNewSecondImg(e.target.value)}
                            />
                        </th>
                        <th>
                            <textarea
                             rows="7"
                             value={newDescription}
                             onChange={(e) => setNewDescription(e.target.value)}
                            />
                        </th>
                        <th>
                            <select name="category_id" id="category_id" value={newCategoryId} onChange={(e) => setNewCategoryId(e.target.value)}>
                                {categories.map((category) => (
                                    <option value={category.id}>{category.name}</option>
                                ))}
                            </select>
                        </th>
                        <th>
                            <select name="status_id" id="status_id" value={newStatusId} onChange={(e) => setNewStatusId(e.target.value)}>
                                {statues.map((status) => (
                                    <option value={status.id}>{status.name}</option>
                                ))}
                            </select>
                        </th>
                        <th>
                            <button className='btn btn-success' onClick={addProduct}>Add</button>
                        </th>
                    </tr>
                </tfoot>

            </table>
        </div>
        </AdminLayout>
    );
}

export default AdminProductEdit;
