// LoginPage.js
import React, { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [loginError, setLoginError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with actual authentication logic (e.g., API call)
    if (formData.username === 'test' && formData.password === 'password') {
      // Successful login - redirect or update app state
      console.log('Login successful!'); 
      alert('Login successful!')
      setLoginError(false);
    } else {
      // Invalid credentials
      setLoginError(true);
    }
  };

  return (
    <section className="login-page">
      <div className="container">
        <h2>Login</h2>

        {loginError && (
          <div className="error-message">
            Invalid username or password.
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;