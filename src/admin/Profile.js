import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h3>Meu Perfil</h3>
      <p>Visualize e edite as informações do seu perfil</p>
      
      <div className="profile-group">
        <h4>Dados Pessoais</h4>
        <label htmlFor="fullName">Nome Completo:</label>
        <input type="text" id="fullName" value="Orlando Filho" readOnly />
      </div>

      <div className="profile-group">
        <h4>Credenciais</h4>
        <label htmlFor="username">Nome de Usuário:</label>
        <input type="text" id="username" value="orlando" readOnly />
        {}
      </div>

      <div className="profile-group">
        <h4>Permissões</h4>
        <p>Sua função atual: **Administrador**</p>
      </div>

      {}
    </div>
  );
};

export default Profile;