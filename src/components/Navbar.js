import React, { useState } from 'react'; // Importe useState
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importe os ícones de barra e X
import "./Navbar.css"; // Continue usando o seu arquivo CSS direto

export default function Navbar() {
  const [click, setClick] = useState(false); // Estado para controlar o clique do hambúrguer

  const handleClick = () => setClick(!click); // Função para alternar o estado (abrir/fechar)
  const closeMobileMenu = () => setClick(false); // Função para fechar o menu ao clicar em um link

  return (
    <nav className="navbar">
      {/* Container para alinhar logo e menu icon */}
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          Waldenor Pereira
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />} {/* Mostra X ou Barras dependendo do estado */}
        </div>

        {/* Adiciona a classe 'active' se click for true para o menu mobile */}
        <ul className={click ? "nav-links active" : "nav-links"}>
          <li><Link to="/" onClick={closeMobileMenu}>Início</Link></li>
          <li><Link to="/fotografias" onClick={closeMobileMenu}>Fotografias</Link></li>
          <li><Link to="/videos" onClick={closeMobileMenu}>Vídeos</Link></li>
          <li><Link to="/release" onClick={closeMobileMenu}>Release</Link></li>
          <li><Link to="/imprensa" onClick={closeMobileMenu}>Imprensa</Link></li>
          <li><Link to="/artigos" onClick={closeMobileMenu}>Artigos</Link></li>
          <li><Link to="/downloads" onClick={closeMobileMenu}>Downloads</Link></li>
          <li><Link to="/contatos" onClick={closeMobileMenu}>Contatos</Link></li>
          <li><a href="https://webmail.kinghost.net/" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Webmail</a></li>
        </ul>
      </div>
    </nav>
  );
}