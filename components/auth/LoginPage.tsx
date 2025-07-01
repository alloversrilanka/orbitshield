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
      <div className="background-image">
        <div className="blackhole-particles"></div>
      </div>

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
          position: relative;
          overflow: hidden;
        }

        .background-image::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(84, 69, 254, 0.1) 0%,
            rgba(132, 133, 235, 0.15) 25%,
            rgba(84, 69, 254, 0.05) 50%,
            rgba(132, 133, 235, 0.2) 75%,
            rgba(84, 69, 254, 0.1) 100%
          );
          background-size: 400% 400%;
          animation: gradientMove 8s ease-in-out infinite;
          z-index: 1;
        }

        .background-image::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300px;
          height: 300px;
          margin: -150px 0 0 -150px;
          background: radial-gradient(
            circle,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.7) 15%,
            rgba(84, 69, 254, 0.3) 30%,
            rgba(132, 133, 235, 0.2) 50%,
            rgba(84, 69, 254, 0.1) 70%,
            transparent 100%
          );
          border-radius: 50%;
          animation: blackholeRotate 8s linear infinite;
          z-index: 2;
        }

        .background-image {
          position: relative;
        }

        .background-image .blackhole-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 3;
        }

        .background-image .blackhole-particles::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 400px;
          height: 400px;
          margin: -200px 0 0 -200px;
          background:
            radial-gradient(
              2px 2px at 50px 50px,
              rgba(84, 69, 254, 0.8),
              transparent
            ),
            radial-gradient(
              1px 1px at 100px 150px,
              rgba(132, 133, 235, 0.6),
              transparent
            ),
            radial-gradient(
              3px 3px at 200px 100px,
              rgba(84, 69, 254, 0.7),
              transparent
            ),
            radial-gradient(
              2px 2px at 300px 200px,
              rgba(132, 133, 235, 0.5),
              transparent
            ),
            radial-gradient(
              1px 1px at 150px 300px,
              rgba(84, 69, 254, 0.6),
              transparent
            );
          border-radius: 50%;
          animation: spiralParticles 6s linear infinite;
        }

        .background-image .blackhole-particles::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 500px;
          height: 500px;
          margin: -250px 0 0 -250px;
          background:
            radial-gradient(
              1px 1px at 80px 120px,
              rgba(255, 255, 255, 0.4),
              transparent
            ),
            radial-gradient(
              2px 2px at 180px 80px,
              rgba(255, 255, 255, 0.3),
              transparent
            ),
            radial-gradient(
              1px 1px at 320px 180px,
              rgba(255, 255, 255, 0.5),
              transparent
            ),
            radial-gradient(
              3px 3px at 120px 320px,
              rgba(255, 255, 255, 0.2),
              transparent
            );
          border-radius: 50%;
          animation: spiralParticles 10s linear infinite reverse;
        }

        @keyframes gradientMove {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes blackholeRotate {
          0% {
            transform: rotate(0deg) scale(1);
            filter: blur(0px);
          }
          25% {
            transform: rotate(90deg) scale(1.05);
            filter: blur(1px);
          }
          50% {
            transform: rotate(180deg) scale(0.95);
            filter: blur(2px);
          }
          75% {
            transform: rotate(270deg) scale(1.1);
            filter: blur(1px);
          }
          100% {
            transform: rotate(360deg) scale(1);
            filter: blur(0px);
          }
        }

        @keyframes spiralParticles {
          0% {
            transform: rotate(0deg) scale(1);
            opacity: 1;
          }
          50% {
            transform: rotate(180deg) scale(0.3);
            opacity: 0.3;
          }
          100% {
            transform: rotate(360deg) scale(0.1);
            opacity: 0;
          }
        }

        .login-form-container {
          width: 615px;
          height: 100%;
          background: #141414;
          padding: 40px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .login-form-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(
              2px 2px at 10px 20px,
              rgba(84, 69, 254, 0.3),
              transparent
            ),
            radial-gradient(
              2px 2px at 40px 70px,
              rgba(132, 133, 235, 0.4),
              transparent
            ),
            radial-gradient(
              1px 1px at 90px 40px,
              rgba(84, 69, 254, 0.5),
              transparent
            ),
            radial-gradient(
              1px 1px at 130px 80px,
              rgba(132, 133, 235, 0.3),
              transparent
            ),
            radial-gradient(
              2px 2px at 160px 30px,
              rgba(84, 69, 254, 0.4),
              transparent
            );
          background-repeat: repeat;
          background-size: 200px 100px;
          animation: floatingParticles 20s linear infinite;
          pointer-events: none;
          z-index: 1;
        }

        .login-form-container::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(
              1px 1px at 200px 50px,
              rgba(84, 69, 254, 0.2),
              transparent
            ),
            radial-gradient(
              2px 2px at 250px 100px,
              rgba(132, 133, 235, 0.3),
              transparent
            ),
            radial-gradient(
              1px 1px at 300px 150px,
              rgba(84, 69, 254, 0.4),
              transparent
            );
          background-repeat: repeat;
          background-size: 300px 200px;
          animation: floatingParticles 25s linear infinite reverse;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes floatingParticles {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-20px) translateX(-5px);
          }
          75% {
            transform: translateY(-10px) translateX(10px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }

        .back-button {
          align-self: flex-start;
          background: none;
          border: none;
          cursor: pointer;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 80px;
          flex: 1;
          position: relative;
          z-index: 2;
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
