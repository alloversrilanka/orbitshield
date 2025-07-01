"use client";

import Navigation from "./Navigation";
import DashboardHeader from "./DashboardHeader";
import StateCard from "./StateCard";
import RecentAudits from "./RecentAudits";
import SubscriptionPanel from "./SubscriptionPanel";
import QuickActions from "./QuickActions";

export default function Dashboard() {
  const stateCardsData = [
    {
      title: "Total Audit",
      value: "12",
      description: "+2 from last month",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/906f50fff236baaa0cf5b4d0124544c991621817?width=128",
    },
    {
      title: "Completed",
      value: "12",
      description: "67% completion rate",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b1fc40af34ec02849a9caaee08681c6026ffae86?width=128",
    },
    {
      title: "In Progress",
      value: "1",
      description: "Est. completion: 2 days",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0c256668080a7a099f961039ab4da0b2a3c983b3?width=128",
    },
    {
      title: "Pending",
      value: "3",
      description: "Awaiting assignment",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ac3b2866d98c8a345affd3a3ea8d40125d5cc741?width=128",
    },
  ];

  return (
    <div className="dashboard">
      <Navigation />
      <DashboardHeader />

      <main className="dashboard-content">
        {/* OrbitShield-inspired Hero Banner */}
        <div className="hero-banner">
          <div className="hero-badge">
            <span className="badge-text">AI-Powered Security Audits</span>
          </div>
          <h1 className="hero-title">Your Crypto Review Hub</h1>
          <p className="hero-description">
            Advanced security auditing platform where expert developers review
            and validate your crypto projects with military-grade precision.
          </p>
          <div className="trust-indicator">
            <div className="avatar-group">
              <div className="avatar avatar-1"></div>
              <div className="avatar avatar-2"></div>
              <div className="avatar avatar-3"></div>
              <div className="avatar avatar-4"></div>
            </div>
            <span className="trust-text">Trusted by 500+ crypto projects</span>
          </div>
        </div>

        {/* OrbitShield-inspired Metrics Grid */}
        <div className="metrics-grid">
          <div className="metric-highlight">
            <div className="metric-icon">🛡️</div>
            <div className="metric-content">
              <h3 className="metric-title">Expert Auditors</h3>
              <p className="metric-desc">
                Senior blockchain security specialists
              </p>
            </div>
          </div>
          <div className="metric-highlight">
            <div className="metric-icon">⚡</div>
            <div className="metric-content">
              <h3 className="metric-title">24-48h</h3>
              <p className="metric-desc">Average audit turnaround time</p>
            </div>
          </div>
          <div className="metric-highlight">
            <div className="metric-icon">🔍</div>
            <div className="metric-content">
              <h3 className="metric-title">99.8%</h3>
              <p className="metric-desc">Vulnerability detection accuracy</p>
            </div>
          </div>
        </div>

        <div className="state-cards">
          {stateCardsData.map((card, index) => (
            <StateCard
              key={index}
              title={card.title}
              value={card.value}
              description={card.description}
              iconSrc={card.iconSrc}
            />
          ))}
        </div>

        <div className="content-grid">
          <RecentAudits />
          <SubscriptionPanel />
        </div>

        <QuickActions />
      </main>

      <div className="background-effects">
        <div className="blur-effect-1"></div>
        <div className="blur-effect-2"></div>
      </div>

      <style jsx>{`
        .dashboard {
          min-height: 100vh;
          background: var(--surface-background);
          position: relative;
          overflow-x: hidden;
        }

        .dashboard-content {
          padding: 0 32px 32px;
          display: flex;
          flex-direction: column;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-banner {
          text-align: center;
          padding: 60px 0;
          background: linear-gradient(
            135deg,
            rgba(79, 82, 255, 0.1) 0%,
            rgba(106, 130, 252, 0.05) 100%
          );
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
        }

        .hero-banner::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(
              circle at 20% 80%,
              rgba(79, 82, 255, 0.15) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 80% 20%,
              rgba(106, 130, 252, 0.1) 0%,
              transparent 50%
            );
          pointer-events: none;
        }

        .hero-badge {
          display: inline-flex;
          padding: 8px 16px;
          background: rgba(79, 82, 255, 0.2);
          border: 1px solid rgba(79, 82, 255, 0.3);
          border-radius: 24px;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        .badge-text {
          color: rgba(106, 130, 252, 1);
          font-size: 14px;
          font-weight: 500;
          font-family: Inter, sans-serif;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 500;
          color: #ffffff;
          margin: 0 0 16px 0;
          letter-spacing: -0.96px;
          font-family: Inter, sans-serif;
          position: relative;
          z-index: 1;
        }

        .hero-description {
          font-size: 18px;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 32px 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
          font-family: Inter, sans-serif;
          position: relative;
          z-index: 1;
        }

        .trust-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          position: relative;
          z-index: 1;
        }

        .avatar-group {
          display: flex;
          margin-right: 8px;
        }

        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid #000;
          margin-left: -8px;
          background: linear-gradient(45deg, #4f52ff, #6a82fc);
        }

        .avatar-1 {
          background: linear-gradient(45deg, #4f52ff, #6a82fc);
        }
        .avatar-2 {
          background: linear-gradient(45deg, #6a82fc, #4f52ff);
        }
        .avatar-3 {
          background: linear-gradient(45deg, #8b5cf6, #a855f7);
        }
        .avatar-4 {
          background: linear-gradient(45deg, #3b82f6, #1d4ed8);
        }

        .trust-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          font-weight: 400;
          font-family: Inter, sans-serif;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }

        .metric-highlight {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px;
          background: rgba(10, 10, 10, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .metric-highlight:hover {
          background: rgba(79, 82, 255, 0.1);
          border-color: rgba(79, 82, 255, 0.3);
          transform: translateY(-2px);
        }

        .metric-icon {
          font-size: 32px;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            rgba(79, 82, 255, 0.2),
            rgba(106, 130, 252, 0.1)
          );
          border-radius: 12px;
          border: 1px solid rgba(79, 82, 255, 0.3);
        }

        .metric-content {
          flex: 1;
        }

        .metric-title {
          font-size: 20px;
          font-weight: 500;
          color: #ffffff;
          margin: 0 0 4px 0;
          font-family: Inter, sans-serif;
        }

        .metric-desc {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          font-family: Inter, sans-serif;
        }

        .state-cards {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 32px;
          align-items: start;
        }

        .background-effects {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: -1;
        }

        .blur-effect-1 {
          position: absolute;
          width: 466px;
          height: 286px;
          left: 397px;
          top: 515px;
          background: rgba(132, 133, 235, 0.25);
          border-radius: 50%;
          filter: blur(100px);
          animation: floatBlur1 12s ease-in-out infinite;
        }

        .blur-effect-2 {
          position: absolute;
          width: 345px;
          height: 229px;
          left: -93px;
          top: 490px;
          background: rgba(132, 133, 235, 0.15);
          border-radius: 50%;
          filter: blur(100px);
          animation: floatBlur2 15s ease-in-out infinite;
        }

        @keyframes floatBlur1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.25;
          }
          25% {
            transform: translate(20px, -15px) scale(1.1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-15px, 10px) scale(0.9);
            opacity: 0.2;
          }
          75% {
            transform: translate(10px, -5px) scale(1.05);
            opacity: 0.35;
          }
        }

        @keyframes floatBlur2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.15;
          }
          33% {
            transform: translate(-10px, 20px) scale(1.2);
            opacity: 0.2;
          }
          66% {
            transform: translate(15px, -10px) scale(0.8);
            opacity: 0.1;
          }
        }

        @media (max-width: 1200px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .dashboard-content {
            padding: 0 20px 20px;
            gap: 24px;
          }

          .hero-banner {
            padding: 40px 20px;
          }

          .hero-title {
            font-size: 32px;
            letter-spacing: -0.64px;
          }

          .hero-description {
            font-size: 16px;
          }

          .metrics-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .metric-highlight {
            padding: 20px;
          }

          .state-cards {
            flex-direction: column;
            gap: 16px;
          }

          .content-grid {
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
}
