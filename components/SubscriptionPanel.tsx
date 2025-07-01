export default function SubscriptionPanel() {
  return (
    <div className="subscription-panel">
      <div className="subscription-header">
        <h2 className="subscription-title">Subscription</h2>
        <p className="subscription-description">Your current plan and usage</p>
      </div>

      <div className="subscription-content">
        <div className="plan-details">
          <div className="plan-info">
            <div className="plan-details-text">
              <h3 className="plan-name">Pro Plan</h3>
              <div className="billing-info">
                <span className="billing-label">Next billing :</span>
                <span className="billing-date">July 23, 2025</span>
              </div>
            </div>
            <div className="plan-status">
              <span className="status-text">Active</span>
            </div>
          </div>

          <div className="usage-details">
            <div className="usage-row">
              <span className="usage-label">Audits Used</span>
              <span className="usage-value">8/10</span>
            </div>

            <div className="usage-bar">
              <div className="usage-bar-background">
                <div className="usage-bar-fill"></div>
              </div>
              <p className="usage-remaining">2 audits remaining this month</p>
            </div>
          </div>
        </div>

        <button className="upgrade-btn">Upgrade Plan</button>
      </div>

      <div className="background-effect"></div>

      <style jsx>{`
        .subscription-panel {
          position: relative;
          width: 445px;
          height: 394px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 32px;
          border-radius: 16px;
          border: 1.5px solid rgba(112, 115, 241, 0.57);
          background: var(--card-background);
          overflow: hidden;
        }

        .subscription-header {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .subscription-title {
          color: #fff;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 20px;
          font-weight: 400;
          line-height: normal;
          margin: 0;
        }

        .subscription-description {
          color: rgba(255, 255, 255, 0.6);
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: normal;
          margin: 0;
        }

        .subscription-content {
          display: flex;
          flex-direction: column;
          gap: 64px;
          flex: 1;
        }

        .plan-details {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .plan-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .plan-details-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .plan-name {
          color: #fff;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: normal;
          margin: 0;
        }

        .billing-info {
          display: flex;
          gap: 10px;
        }

        .billing-label,
        .billing-date {
          color: rgba(255, 255, 255, 0.6);
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: normal;
        }

        .plan-status {
          display: flex;
          padding: 8px 16px;
          justify-content: center;
          align-items: center;
          border-radius: 20px;
          background: #e3e3e3;
        }

        .status-text {
          color: #1f1f1f;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 12px;
          font-weight: 500;
          line-height: normal;
        }

        .usage-details {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .usage-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .usage-label,
        .usage-value {
          color: #fff;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: normal;
        }

        .usage-bar {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .usage-bar-background {
          width: 100%;
          height: 8px;
          border-radius: 50px;
          background: rgba(73, 76, 235, 0.2);
          position: relative;
        }

        .usage-bar-fill {
          width: 82%;
          height: 100%;
          border-radius: 50px;
          background: var(--brand-color);
        }

        .usage-remaining {
          color: rgba(255, 255, 255, 0.6);
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: normal;
          margin: 0;
        }

        .upgrade-btn {
          display: flex;
          width: 100%;
          height: 43px;
          padding: 12px 40px;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          background: var(--brand-color);
          color: #fff;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: normal;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .upgrade-btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        .background-effect {
          position: absolute;
          width: 170px;
          height: 113px;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(107, 109, 239, 0.8);
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .subscription-panel {
            width: 100%;
            max-width: 445px;
          }
        }

        @media (max-width: 768px) {
          .subscription-panel {
            height: auto;
            min-height: 350px;
          }

          .subscription-content {
            gap: 40px;
          }

          .plan-details {
            gap: 24px;
          }
        }
      `}</style>
    </div>
  );
}
