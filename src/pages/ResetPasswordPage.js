import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResetPasswordPage.css';

const ResetPasswordPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = location.hash;
    const queryString = hash.includes('?') ? hash.split('?')[1] : '';
    const params = new URLSearchParams(queryString);
    const urlToken = params.get('token');

    if (urlToken) {
      setToken(urlToken);
    } else {
      setError('Token de recuperação não encontrado na URL.');
    }
  }, [location.hash]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }
    if (!token) {
      setError('Token de recuperação ausente.');
      return;
    }
    if (password.length < 6) {
      setError('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword: password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Senha redefinida com sucesso! Redirecionando para o login...');
        setTimeout(() => navigate('/#/admin'), 3000);
      } else {
        setError(data.message || 'Erro ao redefinir senha. O token pode ser inválido ou expirado.');
      }
    } catch (err) {
      setError('Ocorreu um erro de rede. Tente novamente mais tarde.');
      console.error('Erro na redefinição de senha:', err);
    }
  };

  return (
    <div className="reset-password-container">
      <form className="reset-password-form" onSubmit={handleSubmit}>
        <h2>Redefinir Senha</h2>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
        {token ? (
          <>
            <div className="form-group">
              <label htmlFor="password">Nova Senha:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirme a Nova Senha:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="reset-button">Redefinir Senha</button>
          </>
        ) : (
          <p>Carregando ou token ausente. Verifique o link de recuperação de senha.</p>
        )}
      </form>
    </div>
  );
};

export default ResetPasswordPage;