import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; 
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    //ACEITA QUALUQER USUARIO E SENHA -------ALTERAR AO INTEGRAR BD
    if (username.trim() !== '' && password.trim() !== '') {
      localStorage.setItem('userToken', 'fake-jwt-token-for-admin-access');
      localStorage.setItem('userData', JSON.stringify({ name: 'Usuário de Teste', role: 'guest' }));
      navigate('/dashboard');
    } else {
      alert('Por favor, preencha o usuário e a senha.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2> {}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Usuário:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Entrar</button>
        </form>
        <p className="forgot-password-link"> {}
          <a href="/forgot-password">Esqueceu a senha?</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;