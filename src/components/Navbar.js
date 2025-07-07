import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
        <div className="logo">Waldenor PT</div>
        <ul className="nav-links">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/fotografias">Fotografias</Link></li>
            <li><Link to="/videos">Vídeos</Link></li>
            <li><Link to="/release">Release</Link></li>
            <li><Link to="/imprensa">Imprensa</Link></li>
            <li><Link to="/artigos">Artigos</Link></li>
            <li><Link to="/downloads">Downloads</Link></li>
            <li><Link to="/contatos">Contatos</Link></li>
            <li><a href="https://webmail.kinghost.net/" target="_blank">Webmail</a></li>
        </ul>
        </nav>
    );
    }
