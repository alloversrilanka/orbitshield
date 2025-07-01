"use client";

import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

interface LoginPageProps {
  onSwitchToRegister: () => void;
}

export default function LoginPage({ onSwitchToRegister }: LoginPageProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user" as "user" | "auditor" | "admin",
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(formData.email, formData.password, formData.role);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="login-page">
      <div className="background-image"></div>

      <div className="login-form-container">
        <button className="back-button" onClick={() => window.history.back()}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M7.99996 10.6667L2.66663 16.0001L7.99996 21.3334"
              stroke="#5445FE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.66663 16H29.3333"
              stroke="#5445FE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="login-form">
          <div className="form-header">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d867b400b9ca91d8a7969095219d0155643dc2f?width=558"
              alt="Orbitshield Logo"
              className="logo"
            />
            <h1 className="welcome-title">Welcome Back</h1>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <div className="form-inputs">
              <div className="role-selection">
                <label className="role-label">Select your role :</label>
                <div className="role-options">
                  <div className="role-option">
                    <div
                      className={`radio-button ${formData.role === "user" ? "selected" : ""}`}
                      onClick={() => handleInputChange("role", "user")}
                    >
                      {formData.role === "user" && (
                        <div className="radio-inner"></div>
                      )}
                    </div>
                    <span className="role-text">User</span>
                  </div>
                  <div className="role-option">
                    <div
                      className={`radio-button ${formData.role === "auditor" ? "selected" : ""}`}
                      onClick={() => handleInputChange("role", "auditor")}
                    >
                      {formData.role === "auditor" && (
                        <div className="radio-inner"></div>
                      )}
                    </div>
                    <span className="role-text">Auditor</span>
                  </div>
                </div>
              </div>

              <div className="input-group">
                <label className="input-label">Email :</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="form-input"
                  required
                />
              </div>

              <div className="input-group">
                <label className="input-label">Password :</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="form-input"
                  required
                />
              </div>

              <div className="form-options">
                <div className="remember-me">
                  <div
                    className={`checkbox ${formData.rememberMe ? "checked" : ""}`}
                    onClick={() =>
                      handleInputChange("rememberMe", !formData.rememberMe)
                    }
                  ></div>
                  <span className="remember-text">Remember me</span>
                </div>
                <a href="#" className="forgot-password">
                  Forget Password
                </a>
              </div>
            </div>

            <button type="submit" className="login-button" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="switch-form">
            <span className="switch-text">Don't have Account ? </span>
            <button
              type="button"
              onClick={onSwitchToRegister}
              className="switch-link"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .login-page {
          display: flex;
          width: 100vw;
          height: 100vh;
          background: #000;
          position: relative;
        }

        .background-image {
          width: 825px;
          height: 100%;
          background: url("https://cdn.builder.io/api/v1/image/assets/TEMP/5a60e0054137e9d8b9cb0f1d7ae58dbb34fcd680?width=1650")
            lightgray 50% / cover no-repeat;
        }

        .login-form-container {
          width: 615px;
          height: 100%;
          background: #141414;
          padding: 40px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .back-button {
          align-self: flex-start;
          background: none;
          border: none;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 80px;
          flex: 1;
        }

        .form-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .logo {
          width: 279px;
          height: 106px;
        }

        .welcome-title {
          color: #fbfbfb;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 24px;
          font-weight: 500;
          margin: 0;
        }

        .form {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 64px;
          width: 100%;
          max-width: 487px;
        }

        .form-inputs {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
        }

        .role-selection {
          display: flex;
          padding: 20px 0;
          align-items: flex-start;
          gap: 40px;
        }

        .role-label {
          color: #fbfbfb;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 16px;
          font-weight: 400;
        }

        .role-options {
          display: flex;
          align-items: flex-start;
          gap: 32px;
        }

        .role-option {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .radio-button {
          width: 20px;
          height: 20px;
          border: 2px solid #5445fe;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #232425;
        }

        .radio-button.selected {
          background: #232425;
        }

        .radio-inner {
          width: 10px;
          height: 10px;
          background: #5445fe;
          border-radius: 50%;
        }

        .role-text {
          color: #fff;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 16px;
          font-weight: 400;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .input-label {
          color: #fbfbfb;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 16px;
          font-weight: 400;
        }

        .form-input {
          height: 64px;
          padding: 20px;
          border-radius: 8px;
          border: 1px solid #171819;
          background: #0d0d0d;
          color: #fff;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 16px;
          outline: none;
        }

        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0 4px;
        }

        .remember-me {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .checkbox {
          width: 14px;
          height: 14px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 4px;
          background: transparent;
        }

        .checkbox.checked {
          background: #5445fe;
          border-color: #5445fe;
        }

        .remember-text {
          color: rgba(255, 255, 255, 0.6);
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 14px;
          font-weight: 400;
        }

        .forgot-password {
          color: rgba(255, 255, 255, 0.6);
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 14px;
          font-weight: 400;
          text-decoration: none;
        }

        .login-button {
          display: flex;
          padding: 12px 40px;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          background: #5445fe;
          color: #fff;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 18px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          width: 100%;
          transition: opacity 0.2s;
        }

        .login-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .login-button:hover:not(:disabled) {
          opacity: 0.9;
        }

        .switch-form {
          text-align: center;
          color: rgba(255, 255, 255, 0.6);
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 16px;
          font-weight: 400;
        }

        .switch-text {
          color: rgba(255, 255, 255, 0.6);
        }

        .switch-link {
          color: #5445fe;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
        }

        @media (max-width: 768px) {
          .login-page {
            flex-direction: column;
          }

          .background-image {
            width: 100%;
            height: 200px;
          }

          .login-form-container {
            width: 100%;
            padding: 20px;
          }

          .role-selection {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
}
