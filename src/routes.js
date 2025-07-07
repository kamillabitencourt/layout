import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fotografias from "./pages/Fotografias";
import Videos from "./pages/Videos";
import Release from "./pages/Release";
import Imprensa from "./pages/Imprensa";
import Artigos from "./pages/Artigos";
import Downloads from "./pages/Downloads";
import Contatos from "./pages/Contatos";
import Webmail from "./pages/Webmail";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fotografias" element={<Fotografias />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/release" element={<Release />} />
            <Route path="/imprensa" element={<Imprensa />} />
            <Route path="/artigos" element={<Artigos />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route path="/webmail" element={<Webmail />} />
        </Routes>
    );
}
