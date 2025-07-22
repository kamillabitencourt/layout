import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './pages/LoginPage.js';
import ForgotPasswordPage from './pages/ForgotPasswordPage.js';
import ResetPasswordPage from './pages/ResetPasswordPage.js';
import Dashboard from './admin/Dashboard.js'; 
import ProtectedRoute from './components/ProtectedRoute.js'; 
import MainLayout from './layouts/MainLayout.js';

function App() {
  return (
    <HashRouter>
      <Routes>
        {}
        <Route path="/admin" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {}
        {}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </HashRouter>
  );
}

export default App;