import React, { useState } from 'react';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      //api de backend para solicitar recuperação
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Um link de recuperação de senha foi enviado para o seu e-mail.');
      } else {
        setError(data.message || 'Erro ao solicitar recuperação de senha. Verifique o e-mail.');
      }
    } catch (err) {
      setError('Ocorreu um erro de rede. Tente novamente mais tarde.');
      console.error('Erro na recuperação de senha:', err);
    }
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <h2>Recuperar Senha</h2>
        <p>Digite seu e-mail para receber um link de redefinição de senha.</p>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="send-link-button">Enviar link de recuperação</button>
        <div className="back-to-login">
          <a href="/#/admin">Voltar para o Login</a> {}
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;