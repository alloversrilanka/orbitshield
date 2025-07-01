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
          max-width: 1440px;
          margin: 0 auto;
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
