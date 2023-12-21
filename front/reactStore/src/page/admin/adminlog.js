import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bcrypt from 'bcryptjs-react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(() => {
    // Initialize the login state from cookies
    const storedLoggedIn = Cookies.get('loggedIn');
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
  });
  const navigate = useNavigate(); // Access the navigate function

  const saltRounds = 10;
  
  const handleLogin = async () => {
    try {
      if (!username || !password) {
        console.error('Please enter both username and password.');
        return;
      }

      const response = await fetch(`http://127.0.0.1:8000/api/admin/${username}`);
      const user = await response.json();
      console.log(user);

      if (!user || !user.password) {
        console.error('User not found or password not set.');
        setLoggedIn(false);
        return;
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        setLoggedIn(true);
        console.log('Login successful!');
        
        // Save loggedIn value in cookies
        Cookies.set('loggedIn', true, { expires: 1/24 }); // Set expiration to 7 days

        // Redirect to /admin-category-edit upon successful login
        window.location.href = '/admin-product-edit';
      } else {
        setLoggedIn(false);
        console.log('Login failed. Incorrect username or password.');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
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

        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>

        {loggedIn && (
          <div className="alert alert-success mt-3" role="alert">
            Login successful!
          </div>
        )}

        {!loggedIn && loggedIn !== null && (
          <div className="alert alert-danger mt-3" role="alert">
            Login failed. Incorrect username or password.
          </div>
        )}
      </form>
    </div>
  );
};

export default AdminLogin;
