interface AuditItem {
  title: string;
  status: "Completed" | "In Progress" | "Overdue";
  created: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  count: number;
}

const auditData: AuditItem[] = [
  {
    title: "Crypto Wallet Security Review",
    status: "Completed",
    created: "6/20/2025",
    severity: "High",
    count: 1,
  },
  {
    title: "Web3 Webapp Security Review",
    status: "Completed",
    created: "6/20/2025",
    severity: "High",
    count: 1,
  },
  {
    title: "Smart Wallet Security Review",
    status: "In Progress",
    created: "6/20/2025",
    severity: "Medium",
    count: 5,
  },
  {
    title: "Cross-chain Webapp Security Review",
    status: "Overdue",
    created: "6/20/2025",
    severity: "Low",
    count: 3,
  },
];

export default function RecentAudits() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "#10B981";
      case "In Progress":
        return "#3B82F6";
      case "Overdue":
        return "#EF4444";
      default:
        return "#6B7280";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "#DC2626";
      case "High":
        return "#EA580C";
      case "Medium":
        return "#D97706";
      case "Low":
        return "#059669";
      default:
        return "#6B7280";
    }
  };

  return (
    <div className="recent-audits">
      <div className="audits-header">
        <div className="header-titles">
          <h2 className="audits-title">Recent Audits</h2>
          <p className="audits-description">
            View latest audit submissions and their current status
          </p>
        </div>
      </div>

      <div className="audits-table">
        <div className="table-header">
          <div className="header-cell">Name</div>
          <div className="header-cell">Status</div>
          <div className="header-cell">Created</div>
          <div className="header-cell">Severity</div>
          <div className="header-cell">Count</div>
        </div>

        <div className="table-body">
          {auditData.map((audit, index) => (
            <div key={index} className="table-row">
              <div className="cell audit-name">{audit.title}</div>
              <div className="cell status-cell">
                <span
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(audit.status) }}
                >
                  {audit.status}
                </span>
              </div>
              <div className="cell">{audit.created}</div>
              <div className="cell severity-cell">
                <span
                  className="severity-badge"
                  style={{ color: getSeverityColor(audit.severity) }}
                >
                  {audit.severity}
                </span>
                <span className="severity-count">{audit.count}</span>
              </div>
              <div className="cell">{audit.count}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .recent-audits {
          width: 100%;
          max-width: 911px;
          height: 394px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          border-radius: 16px;
          border: 1px solid rgba(112, 115, 241, 0.5);
          background: var(--card-background);
          padding: 24px;
        }

        .audits-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .header-titles {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .audits-title {
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

        .audits-description {
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

        .audits-table {
          display: flex;
          flex-direction: column;
          flex: 1;
          overflow: hidden;
        }

        .table-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 80px;
          gap: 16px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 16px;
        }

        .header-cell {
          color: rgba(255, 255, 255, 0.7);
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: normal;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .table-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
          overflow-y: auto;
        }

        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 80px;
          gap: 16px;
          padding: 12px 0;
          align-items: center;
        }

        .cell {
          color: #fff;
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

        .audit-name {
          font-weight: 500;
        }

        .status-cell {
          display: flex;
          align-items: center;
        }

        .status-badge {
          padding: 4px 12px;
          border-radius: 12px;
          color: white;
          font-size: 12px;
          font-weight: 500;
          text-transform: capitalize;
        }

        .severity-cell {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .severity-badge {
          font-weight: 500;
          text-transform: capitalize;
        }

        .severity-count {
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
        }

        @media (max-width: 1024px) {
          .recent-audits {
            max-width: 100%;
          }

          .table-header,
          .table-row {
            grid-template-columns: 2fr 1fr 1fr 1fr;
          }

          .table-row .cell:last-child {
            display: none;
          }

          .table-header .header-cell:last-child {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .recent-audits {
            height: auto;
            min-height: 300px;
          }

          .table-header,
          .table-row {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .header-cell:not(:first-child) {
            display: none;
          }

          .table-row {
            padding: 16px;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.02);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .cell:not(.audit-name) {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.7);
          }
        }
      `}</style>
    </div>
  );
}
