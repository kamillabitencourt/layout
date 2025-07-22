import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import UserControl from './UserControl.js';
import Settings from './Settings.js';
import Profile from './Profile.js';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('Administrador'); 

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        if (user.name) {
          setUsername(user.name);
        }
      } catch (e) {
        console.error("Erro ao parsear user data do localStorage", e);
      }
    }
  }, []);

  const handleLogout = () => {
    //chamar api de logout no backend
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    alert('Sessão encerrada!');
    navigate('/admin'); 
  };

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <h3>Painel </h3>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="/#/dashboard/users">Controle de Usuários</a></li>
            <li><a href="/#/dashboard/settings">Configurações</a></li>
            <li><a href="/#/dashboard/profile">Meu Perfil</a></li>
            {}
          </ul>
        </nav>
        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-button">Sair</button>
        </div>
      </aside>
      <main className="dashboard-content">
        <header className="dashboard-header">
        </header>
        <div className="content-area">
          <Routes>
            {}
            <Route path="users" element={<UserControl />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
            {}
            <Route path="/" element={
                <div>
                    <h2>Visão Geral do Painel</h2>
                    <p>Use o menu lateral para navegar pelas seções administrativas.</p>
                </div>
            } />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;