import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </HashRouter>
  );
}

export default App;
