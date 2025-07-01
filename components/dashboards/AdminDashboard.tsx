"use client";

import Navigation from "../Navigation";
import StateCard from "../StateCard";

export default function AdminDashboard() {
  const stateCardsData = [
    {
      title: "Total Users",
      value: "1,247",
      description: "+892 active users",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/906f50fff236baaa0cf5b4d0124544c991621817?width=128",
    },
    {
      title: "Total Audits",
      value: "3,456",
      description: "84% completion rate",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b1fc40af34ec02849a9caaee08681c6026ffae86?width=128",
    },
    {
      title: "Revenue",
      value: "$45,670",
      description: "+12% from last month",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0c256668080a7a099f961039ab4da0b2a3c983b3?width=128",
    },
    {
      title: "Avg. Completion",
      value: "42h",
      description: "-8% improvement",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ac3b2866d98c8a345affd3a3ea8d40125d5cc741?width=128",
    },
  ];

  const chartData = [
    { month: "Jan", value: 150 },
    { month: "Feb", value: 350 },
    { month: "Mar", value: 500 },
    { month: "Apr", value: 150 },
    { month: "May", value: 320 },
    { month: "Jun", value: 500 },
    { month: "Jul", value: 250 },
    { month: "Aug", value: 180 },
    { month: "Sep", value: 350 },
    { month: "Oct", value: 150 },
    { month: "Nov", value: 350 },
    { month: "Dec", value: 500 },
  ];

  const alertsData = [
    {
      id: "1",
      title: "High Queue Volume",
      description:
        "Audit queue has 45+ pending items. Consider assigning more auditors.",
      time: "2 hours",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/15449af97ef128be3758b1e9d6c9a119edbf6db6?width=128",
    },
    {
      id: "2",
      title: "New Auditor Application",
      description: "Jane Doe has applied to become an auditor. Review pending.",
      time: "4 hours",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5bb1219471228ad08dcd3c39ca13a8f6dc7d1363?width=128",
    },
    {
      id: "3",
      title: "SLA Performance",
      description: "All audits completed within SLA this week. Great job!",
      time: "1 day",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a7b997fb12302082f868042c14d574da5a847cf6?width=128",
    },
  ];

  const maxValue = Math.max(...chartData.map((d) => d.value));

  return (
    <div className="admin-dashboard">
      <Navigation />

      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-titles">
            <h1 className="dashboard-title">Admin Dashboard</h1>
            <p className="dashboard-description">
              Platform overview and system management
            </p>
          </div>
          <div className="header-actions">
            <div className="filter-button">
              <span>Last 30 days</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M14.0002 2.66667H9.3335"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66667 2.66667H2"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 8H8"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.33333 8H2"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.9998 13.3333H10.6665"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 13.3333H2"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.3335 1.33333V3.99999"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.3335 6.66667V9.33334"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6665 12V14.6667"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <button className="settings-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2V4"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22V20"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 20.66L16 18.93"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 10.27L7 3.34"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.6602 17L18.9302 16"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.33984 7L5.06984 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 12H22"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12H4"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.6602 7L18.9302 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.33984 17L5.06984 16"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 3.34L16 5.07"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 13.73L7 20.66"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

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
          <div className="audit-trends-section">
            <div className="trends-header">
              <h2 className="section-title">Audit Trends</h2>
              <p className="section-description">
                Monthly audit volume and completion rates
              </p>
            </div>

            <div className="chart-container">
              <div className="chart-y-axis">
                <div className="y-value">600</div>
                <div className="y-value">500</div>
                <div className="y-value">400</div>
                <div className="y-value">300</div>
                <div className="y-value">200</div>
                <div className="y-value">100</div>
                <div className="y-value">0</div>
              </div>

              <div className="chart-content">
                <div className="chart-bars">
                  {chartData.map((data, index) => (
                    <div key={index} className="bar-container">
                      <div className="bar-background"></div>
                      <div
                        className="bar-fill"
                        style={{
                          height: `${(data.value / maxValue) * 100}%`,
                          bottom: 0,
                        }}
                      ></div>
                    </div>
                  ))}
                </div>

                <div className="chart-x-axis">
                  {chartData.map((data, index) => (
                    <div key={index} className="x-label">
                      {data.month}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="status-distribution-section">
            <div className="status-header">
              <h2 className="section-title">Audit Status Distribution</h2>
              <p className="section-description">
                Current status of all audits
              </p>
            </div>

            <div className="donut-chart">
              <svg width="200" height="200" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="20"
                  strokeDasharray="110 330"
                  strokeDashoffset="0"
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="20"
                  strokeDasharray="88 352"
                  strokeDashoffset="-110"
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="20"
                  strokeDasharray="66 374"
                  strokeDashoffset="-198"
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="20"
                  strokeDasharray="176 264"
                  strokeDashoffset="-264"
                  transform="rotate(-90 100 100)"
                />
              </svg>

              <div className="chart-legend">
                <div className="legend-item">
                  <div
                    className="legend-color"
                    style={{ backgroundColor: "#10B981" }}
                  ></div>
                  <span>Completed</span>
                </div>
                <div className="legend-item">
                  <div
                    className="legend-color"
                    style={{ backgroundColor: "#3B82F6" }}
                  ></div>
                  <span>In Progress</span>
                </div>
                <div className="legend-item">
                  <div
                    className="legend-color"
                    style={{ backgroundColor: "#EF4444" }}
                  ></div>
                  <span>Overdue</span>
                </div>
                <div className="legend-item">
                  <div
                    className="legend-color"
                    style={{ backgroundColor: "#F59E0B" }}
                  ></div>
                  <span>Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="system-alerts-section">
          <div className="alerts-header">
            <h2 className="section-title">System Alerts</h2>
            <p className="section-description">
              Important notifications and system status
            </p>
          </div>

          <div className="alerts-grid">
            {alertsData.map((alert) => (
              <div key={alert.id} className="alert-card">
                <img src={alert.icon} alt="Alert icon" className="alert-icon" />
                <div className="alert-content">
                  <div className="alert-header">
                    <h3 className="alert-title">{alert.title}</h3>
                    <div className="alert-time">
                      <div className="time-dot"></div>
                      <span className="time-text">{alert.time}</span>
                    </div>
                  </div>
                  <p className="alert-description">{alert.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="background-pattern">
            <svg
              width="550"
              height="160"
              viewBox="0 0 550 160"
              className="pattern-svg"
            >
              <circle cx="322" cy="53" r="4" fill="white" />
              <circle cx="232" cy="91" r="4" fill="white" />
              <circle cx="232" cy="139" r="4" fill="white" />
              <circle cx="187" cy="78" r="4" fill="white" />
              <circle cx="4" cy="135" r="4" fill="white" />
              <circle cx="96" cy="87" r="4" fill="#5356FF" />
              <circle cx="140" cy="57" r="4" fill="white" />
              <circle cx="141" cy="131" r="4" fill="#5356FF" />
              <circle cx="186" cy="116" r="4" fill="#968DFF" />
              <circle cx="366" cy="39" r="4" fill="#968DFF" />
              <circle cx="277" cy="12" r="4" fill="#121212" />
              <circle
                cx="186"
                cy="25"
                r="4"
                fill="#968DFF"
                fillOpacity="0.08"
              />
              <circle
                cx="232"
                cy="25"
                r="4"
                fill="#968DFF"
                fillOpacity="0.08"
              />
              <circle cx="96" cy="153" r="4" fill="#968DFF" />
              <circle cx="322" cy="125" r="4" fill="#968DFF" />
              <circle cx="277" cy="91" r="4" fill="#968DFF" />
              <circle cx="457" cy="89" r="4" fill="#5356FF" />
              <circle cx="366" cy="91" r="4" fill="white" />
              <circle cx="412" cy="138" r="4" fill="#5356FF" />
              <circle cx="457" cy="121" r="4" fill="#968DFF" />
              <circle cx="546" cy="138" r="4" fill="white" />
            </svg>
          </div>
        </div>
      </main>

      <div className="background-effects">
        <div className="blur-effect-1"></div>
        <div className="blur-effect-2"></div>
        <div className="blur-effect-3"></div>
      </div>

      <style jsx>{`
        .admin-dashboard {
          min-height: 100vh;
          background: var(--surface-background);
          position: relative;
          overflow-x: hidden;
        }

        .dashboard-header {
          width: 100%;
          padding: 20px 32px;
          border-bottom: 1px solid #171819;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1440px;
          margin: 0 auto;
        }

        .header-titles {
          display: flex;
          flex-direction: column;
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
          margin: 0;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .filter-button {
          display: flex;
          height: 45px;
          padding: 8px 24px;
          justify-content: center;
          align-items: center;
          gap: 16px;
          border-radius: 8px;
          border: 1px solid #171819;
          cursor: pointer;
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

        .settings-button {
          display: flex;
          padding: 8px;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          border: 1px solid #4f52ff;
          background: rgba(176, 177, 255, 0.2);
          backdrop-filter: blur(29.16px);
          cursor: pointer;
        }

        .dashboard-content {
          padding: 32px;
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

        .audit-trends-section {
          display: flex;
          flex-direction: column;
          gap: 40px;
          padding: 24px;
          border-radius: 16px;
          background: rgba(13, 13, 13, 0.5);
        }

        .trends-header {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .section-title {
          color: #fff;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 20px;
          font-weight: 400;
          margin: 0;
        }

        .section-description {
          color: rgba(255, 255, 255, 0.7);
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 14px;
          font-weight: 400;
          margin: 0;
        }

        .chart-container {
          display: flex;
          align-items: center;
          gap: 32px;
          height: 300px;
        }

        .chart-y-axis {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 270px;
          align-items: flex-end;
        }

        .y-value {
          color: #615e83;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 14px;
          font-weight: 400;
        }

        .chart-content {
          flex: 1;
          height: 270px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .chart-bars {
          display: flex;
          align-items: flex-end;
          gap: 20px;
          height: 240px;
          padding-bottom: 10px;
        }

        .bar-container {
          position: relative;
          width: 48px;
          height: 100%;
        }

        .bar-background {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(13, 13, 13, 0.75);
          border-radius: 3px;
        }

        .bar-fill {
          position: absolute;
          width: 100%;
          background: var(--brand-color);
          border-radius: 3px;
          transition: height 0.3s ease;
        }

        .chart-x-axis {
          display: flex;
          justify-content: space-between;
          padding: 0 24px;
        }

        .x-label {
          color: #615e83;
          font-family:
            SF Pro Text,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 10px;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.2px;
        }

        .status-distribution-section {
          width: 445px;
          height: 426px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 32px;
          border-radius: 16px;
          border: 1.5px solid rgba(112, 115, 241, 0.57);
          background: var(--card-background);
        }

        .status-header {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .donut-chart {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          flex: 1;
          justify-content: center;
        }

        .chart-legend {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          width: 100%;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.8);
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 14px;
          font-weight: 400;
        }

        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 2px;
        }

        .system-alerts-section {
          position: relative;
          padding: 24px;
          border-radius: 16px;
          border: 1.5px solid rgba(45, 46, 118, 0.59);
          background: var(--card-background);
          overflow: hidden;
        }

        .alerts-header {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 32px;
        }

        .alerts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          position: relative;
          z-index: 2;
        }

        .alert-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid rgba(112, 115, 241, 0.57);
          background: rgba(13, 13, 13, 0.5);
        }

        .alert-icon {
          width: 64px;
          height: 64px;
          flex-shrink: 0;
        }

        .alert-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .alert-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .alert-title {
          color: #fff;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 16px;
          font-weight: 400;
          margin: 0;
        }

        .alert-time {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .time-dot {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
        }

        .time-text {
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

        .alert-description {
          color: rgba(255, 255, 255, 0.7);
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 14px;
          font-weight: 400;
          margin: 0;
          line-height: 1.4;
        }

        .background-pattern {
          position: absolute;
          bottom: 20px;
          right: 24px;
          opacity: 0.7;
          pointer-events: none;
        }

        .pattern-svg {
          width: 550px;
          height: 160px;
        }

        .background-effects {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: -1;
        }

        .blur-effect-1 {
          position: absolute;
          width: 507px;
          height: 158px;
          left: 546px;
          top: 543px;
          background: rgba(107, 109, 239, 0.8);
          border-radius: 50%;
          filter: blur(160px);
        }

        .blur-effect-2 {
          position: absolute;
          width: 507px;
          height: 178px;
          left: 11px;
          top: 663px;
          background: rgba(107, 109, 239, 0.8);
          border-radius: 50%;
          filter: blur(160px);
        }

        .blur-effect-3 {
          position: absolute;
          width: 335px;
          height: 92px;
          bottom: 79px;
          left: 0;
          background: rgba(107, 109, 239, 0.25);
          border-radius: 50%;
          filter: blur(67.5px);
        }

        @media (max-width: 1200px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .status-distribution-section {
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .dashboard-content {
            padding: 20px;
          }

          .state-cards {
            flex-direction: column;
          }

          .alerts-grid {
            grid-template-columns: 1fr;
          }

          .header-content {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }

          .chart-container {
            flex-direction: column;
            height: auto;
            gap: 20px;
          }

          .chart-content {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
