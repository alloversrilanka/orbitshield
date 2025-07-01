export default function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <div className="header-titles">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-description">
          Welcome back! Here's an overview of your audit activity.
        </p>
      </div>

      <button className="new-audit-btn">+ New Audit</button>

      <style jsx>{`
        .dashboard-header {
          display: flex;
          width: 100%;
          padding: 20px 32px;
          justify-content: space-between;
          align-items: center;
          height: 96px;
        }

        .header-titles {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 8px;
        }

        .dashboard-title {
          color: #fff;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: normal;
          margin: 0;
        }

        .dashboard-description {
          color: rgba(255, 255, 255, 0.7);
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: normal;
          margin: 0;
        }

        .new-audit-btn {
          display: flex;
          padding: 12px 40px;
          justify-content: center;
          align-items: center;
          gap: 10px;
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

        .new-audit-btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            height: auto;
            padding: 16px 20px;
          }

          .dashboard-title {
            font-size: 20px;
          }

          .dashboard-description {
            font-size: 14px;
          }

          .new-audit-btn {
            align-self: stretch;
          }
        }
      `}</style>
    </header>
  );
}
