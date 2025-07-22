import React from 'react';
import './Settings.css'; 
const Settings = () => {
  return (
    <div className="settings-container">
      <h3>Configurações do Sistema</h3>
      <p>Aqui você poderá gerenciar as configurações gerais.</p>
      
      <div className="setting-group">
        <h4>Configurações de E-mail</h4>
        <label htmlFor="adminEmail">E-mail do Administrador:</label>
        <input type="email" id="adminEmail" placeholder="Orlandoadmin@gmail.com" />
      </div>

      <button className="save-settings-button">Salvar Configurações</button>
    </div>
  );
};

export default Settings;