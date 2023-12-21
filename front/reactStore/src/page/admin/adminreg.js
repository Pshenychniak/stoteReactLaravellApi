import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bcrypt from 'bcryptjs-react';

const AdminRegistration = () => {
  const [admins, setAdmins] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const saltRounds = 10;

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/admin')
      .then((res) => res.json())
      .then((json) => setAdmins(json));
  }, []);

  const addAdmin = async () => {
    try {
      // Hashing the password before sending it to the server
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const response = await fetch('http://127.0.0.1:8000/api/admin', {
        method: 'POST',
        body: JSON.stringify({
          login: username,
          password: hashedPassword,
        }),
        headers: {
          'Content-Type': 'application/json',
          charset: 'utf-8',
        },
      });

      const data = await response.json();
      setAdmins([...admins, data]);
      setUsername('');
      setPassword('');
      setSuccessMessage('Registration successful!'); // Set success message
    } catch (error) {
      console.error('Registration error:', error);
      setSuccessMessage('Registration failed. Please try again.'); // Set error message
    }
  };

  return (
    <div className="container mt-5">
      <h2>Registration</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={addAdmin}>
          Register
        </button>

        {successMessage && (
          <div className="alert alert-success mt-3" role="alert">
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default AdminRegistration;
