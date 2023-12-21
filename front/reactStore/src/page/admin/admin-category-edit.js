// App.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLayout from '../../component/layout/admin-layout';

const AdminCategoryEdit = () => {
    const [categories, setCategories] = useState([]);

    const [newName, setNewName] = useState('');

    


    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/category')
            .then(res => res.json())
            .then(json => setCategories(json));
    }, []);

    const addCategory = () => {

        fetch('http://127.0.0.1:8000/api/category', {
            method: 'POST',
            body: JSON.stringify({
                name: newName,
            }),
            headers: {
                'Content-Type': 'application/json',
                "charset": "utf-8"
            },
        })
            .then(res => res.json())
            .then(data=>{
                setCategories([...categories, data]);
                setNewName('');                
            })
        
    }

    const updateCategory = (id) => {
        const category = categories.find(category => category.id === id)
        fetch(`http://127.0.0.1:8000/api/category/${id}`, {
            method: 'PUT',
            body: JSON.stringify(category),
            headers: {
                'Content-Type': 'application/json',
                "charset": "utf-8"
            },
        })
            .then(res => res.json())
    }
    const deleteCategory = (id) => {
        fetch(`http://127.0.0.1:8000/api/category/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(() => {
            setCategories(values => {
              return values.filter(category => category.id !== id)
            })
          })
      }




    const onChangeHandler = (id, key, value) => {
        setCategories(values => {
            return values.map(category => {
                if (category.id === id) {
                    return { ...category, [key]: value };
                }
                return category;
            })
        })
    }



    return (
        <AdminLayout>
        <div className="container mt-4">
            <h1>Category Edit</h1>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>
                                {/* {product.title} */}
                                <input
                                    type="text"
                                    value={category.name}
                                    onChange={(e) => onChangeHandler(category.id, "name", e.target.value)} />
                            </td>                            
                            <td>
                                <button className='btn btn-outline-warning' onClick={() => updateCategory(category.id)}>Edit</button>
                                <button className="btn btn-outline-danger" onClick={() => deleteCategory(category.id)}>Delete</button>
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
                             value={newName}
                             onChange={(e) => setNewName(e.target.value)}
                            />
                        </th>
                        
                        <th>
                            <button className='btn btn-success' onClick={addCategory}>Add</button>
                        </th>
                    </tr>
                </tfoot>

            </table>
        </div>
        </AdminLayout>
    );
}

export default AdminCategoryEdit;
