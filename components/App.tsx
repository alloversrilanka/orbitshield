"use client";

import { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import Dashboard from "./Dashboard";
import AuditorDashboard from "./dashboards/AuditorDashboard";
import AdminDashboard from "./dashboards/AdminDashboard";

function AppContent() {
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    // Check for existing user in localStorage on mount
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      // This would normally trigger the auth context to load the user
    }
  }, []);

  const handleSwitchToRegister = () => setAuthMode("register");
  const handleSwitchToLogin = () => setAuthMode("login");

  if (!isAuthenticated) {
    if (authMode === "login") {
      return <LoginPage onSwitchToRegister={handleSwitchToRegister} />;
    } else {
      return <RegisterPage onSwitchToLogin={handleSwitchToLogin} />;
    }
  }

  // Role-based dashboard rendering
  const renderDashboard = () => {
    switch (user?.role) {
      case "auditor":
        return <AuditorDashboard />;
      case "admin":
        return <AdminDashboard />;
      case "user":
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      {renderDashboard()}

      {/* Logout button for testing */}
      <button
        className="logout-button"
        onClick={logout}
        title={`Logout (${user?.role})`}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 17L21 12L16 7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12H9"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <style jsx>{`
        .app-container {
          position: relative;
          min-height: 100vh;
        }

        .logout-button {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 8px;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.2s ease;
        }

        .logout-button:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
