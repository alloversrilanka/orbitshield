"use client";

import Navigation from "../Navigation";
import StateCard from "../StateCard";

interface AuditQueueItem {
  id: string;
  title: string;
  client: string;
  priority: "High" | "Medium" | "Low";
  status: "Queued" | "In Progress" | "Completed";
  technologies: string[];
  submitted: string;
  sla: string;
  estimate: string;
  iconType: "shield" | "check" | "folder";
}

const auditQueueData: AuditQueueItem[] = [
  {
    id: "1",
    title: "Web3 Crypto Webapp Security Review",
    client: "TechStart Inc.",
    priority: "High",
    status: "Queued",
    technologies: ["Python", "TypeScript", "React"],
    submitted: "6/23/2025",
    sla: "6/25/2025",
    estimate: "8h",
    iconType: "shield",
  },
  {
    id: "2",
    title: "Crypto Wallet Compliance Audit",
    client: "TechStart Inc.",
    priority: "High",
    status: "Queued",
    technologies: ["Python", "TypeScript", "React"],
    submitted: "6/23/2025",
    sla: "6/25/2025",
    estimate: "8h",
    iconType: "check",
  },
  {
    id: "3",
    title: "Smart Wallet Performance Review",
    client: "TechStart Inc.",
    priority: "High",
    status: "Queued",
    technologies: ["Python", "TypeScript", "React"],
    submitted: "6/23/2025",
    sla: "6/25/2025",
    estimate: "8h",
    iconType: "folder",
  },
  {
    id: "4",
    title: "Cross-chain Webapp Security Review",
    client: "TechStart Inc.",
    priority: "High",
    status: "Queued",
    technologies: ["Python", "TypeScript", "React"],
    submitted: "6/23/2025",
    sla: "6/25/2025",
    estimate: "8h",
    iconType: "shield",
  },
];

export default function AuditorDashboard() {
  const stateCardsData = [
    {
      title: "Total Assigned",
      value: "24",
      description: "+3 this week",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/906f50fff236baaa0cf5b4d0124544c991621817?width=128",
    },
    {
      title: "Completed",
      value: "18",
      description: "75% completion rate",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b1fc40af34ec02849a9caaee08681c6026ffae86?width=128",
    },
    {
      title: "In Progress",
      value: "4",
      description: "Avg. 36h completion",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0c256668080a7a099f961039ab4da0b2a3c983b3?width=128",
    },
    {
      title: "Queue",
      value: "3",
      description: "Awaiting review",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ac3b2866d98c8a345affd3a3ea8d40125d5cc741?width=128",
    },
  ];

  const getIcon = (type: string) => {
    const icons = {
      shield: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M26.6667 17.3333C26.6667 24 22 27.3333 16.4534 29.2667C16.1629 29.3651 15.8474 29.3604 15.56 29.2533C10 27.3333 5.33337 24 5.33337 17.3333V8.00001C5.33337 7.64639 5.47385 7.30725 5.7239 7.0572C5.97395 6.80715 6.31309 6.66668 6.66671 6.66668C9.33337 6.66668 12.6667 5.06668 14.9867 3.04001C15.2692 2.79867 15.6285 2.66608 16 2.66608C16.3716 2.66608 16.7309 2.79867 17.0134 3.04001C19.3467 5.08001 22.6667 6.66668 25.3334 6.66668C25.687 6.66668 26.0261 6.80715 26.2762 7.0572C26.5262 7.30725 26.6667 7.64639 26.6667 8.00001V17.3333Z"
            stroke="#7577F0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16L14.6667 18.6666L20 13.3333"
            stroke="#7577F0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      check: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M29.0679 13.3333C29.6768 16.3217 29.2428 19.4286 27.8384 22.1357C26.4339 24.8429 24.1437 26.9867 21.3499 28.2097C18.5561 29.4328 15.4274 29.661 12.4856 28.8565C9.54385 28.0519 6.96681 26.2632 5.18426 23.7885C3.4017 21.3139 2.52138 18.303 2.69011 15.2578C2.85883 12.2127 4.06639 9.31744 6.11142 7.05488C8.15645 4.79232 10.9153 3.29923 13.928 2.82459C16.9406 2.34995 20.0249 2.92247 22.6666 4.44665"
            stroke="#7577F0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 14.6666L16 18.6666L29.3333 5.33331"
            stroke="#7577F0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      folder: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M5.33329 26.6667H26.6666C27.3739 26.6667 28.0521 26.3857 28.5522 25.8856C29.0523 25.3855 29.3333 24.7072 29.3333 24V10.6667C29.3333 9.95942 29.0523 9.28115 28.5522 8.78105C28.0521 8.28095 27.3739 8 26.6666 8H16.0933C15.6541 7.99773 15.2222 7.887 14.8361 7.67765C14.45 7.46831 14.1215 7.16683 13.88 6.8L12.7866 5.2C12.5451 4.83317 12.2166 4.53169 11.8305 4.32235C11.4444 4.113 11.0125 4.00227 10.5733 4H5.33329C4.62605 4 3.94777 4.28095 3.44767 4.78105C2.94758 5.28115 2.66663 5.95942 2.66663 6.66667V24C2.66663 25.4667 3.86663 26.6667 5.33329 26.6667Z"
            stroke="#7577F0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6666 13.3333V18.6666"
            stroke="#7577F0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 13.3333V16"
            stroke="#7577F0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.3334 13.3333V21.3333"
            stroke="#7577F0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    };
    return icons[type as keyof typeof icons] || icons.shield;
  };

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      Python: "#D96B27",
      TypeScript: "#5E81FF",
      React: "#72FFA5",
    };
    return colors[tech] || "#968DFF";
  };

  return (
    <div className="auditor-dashboard">
      <Navigation />

      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-titles">
            <h1 className="dashboard-title">Auditor Dashboard</h1>
            <p className="dashboard-description">
              Manage your audit queue and track your performance
            </p>
          </div>
          <div className="rating-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M7.68323 1.53C7.71245 1.47097 7.75758 1.42129 7.81353 1.38655C7.86949 1.35181 7.93404 1.3334 7.9999 1.3334C8.06576 1.3334 8.13031 1.35181 8.18626 1.38655C8.24222 1.42129 8.28735 1.47097 8.31656 1.53L9.85656 4.64933C9.95802 4.85465 10.1078 5.03227 10.293 5.16697C10.4782 5.30167 10.6933 5.38941 10.9199 5.42267L14.3639 5.92667C14.4292 5.93612 14.4905 5.96365 14.5409 6.00613C14.5913 6.04862 14.6288 6.10437 14.6492 6.16707C14.6696 6.22978 14.6721 6.29694 14.6563 6.36096C14.6405 6.42498 14.6071 6.4833 14.5599 6.52933L12.0692 8.95467C11.905 9.11473 11.7821 9.31232 11.7111 9.53042C11.6402 9.74852 11.6233 9.98059 11.6619 10.2067L12.2499 13.6333C12.2614 13.6986 12.2544 13.7657 12.2296 13.8271C12.2048 13.8885 12.1632 13.9417 12.1096 13.9807C12.056 14.0196 11.9925 14.0427 11.9265 14.0473C11.8604 14.0519 11.7944 14.0378 11.7359 14.0067L8.65723 12.388C8.45438 12.2815 8.22868 12.2258 7.99956 12.2258C7.77044 12.2258 7.54475 12.2815 7.3419 12.388L4.2639 14.0067C4.20545 14.0376 4.1395 14.0515 4.07353 14.0468C4.00757 14.0421 3.94424 14.019 3.89076 13.9801C3.83728 13.9413 3.79579 13.8881 3.771 13.8268C3.74622 13.7655 3.73914 13.6985 3.75056 13.6333L4.3379 10.2073C4.37669 9.98116 4.35989 9.74893 4.28892 9.5307C4.21796 9.31246 4.09497 9.11477 3.93056 8.95467L1.4399 6.53C1.39229 6.48402 1.35856 6.4256 1.34254 6.36138C1.32652 6.29717 1.32886 6.22975 1.34928 6.16679C1.36971 6.10384 1.40741 6.04789 1.45808 6.00532C1.50876 5.96275 1.57037 5.93527 1.6359 5.926L5.07923 5.42267C5.30607 5.38967 5.52149 5.30204 5.70695 5.16733C5.89242 5.03261 6.04237 4.85485 6.1439 4.64933L7.68323 1.53Z"
                stroke="#D86B27"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="rating-text">4.8 rating</span>
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

        <div className="tab-bar">
          <div className="tab active">Audit Queue</div>
          <div className="tab">Active Audits</div>
          <div className="tab">Completed</div>
          <div className="tab">Activity</div>
        </div>

        <div className="audit-queue-section">
          <div className="queue-header">
            <div className="header-titles">
              <h2 className="section-title">Audit Queue</h2>
              <p className="section-description">
                Audits assigned to you, sorted by priority and deadline
              </p>
            </div>

            <div className="search-filters">
              <div className="search-container">
                <svg
                  className="search-icon"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M7.33333 13.1667C10.2789 13.1667 12.6667 10.7789 12.6667 7.83333C12.6667 4.88781 10.2789 2.5 7.33333 2.5C4.38781 2.5 2 4.88781 2 7.83333C2 10.7789 4.38781 13.1667 7.33333 13.1667Z"
                    stroke="white"
                    strokeOpacity="0.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 14.5L11.1333 11.6334"
                    stroke="white"
                    strokeOpacity="0.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search for audits..."
                  className="search-input"
                />
              </div>

              <div className="filters">
                <div className="filter-button">
                  <span>All status</span>
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path
                      d="M13.9999 3.16669H9.33325"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.66667 3.16669H2"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 8.5H8"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.33333 8.5H2"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.0001 13.8333H10.6667"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 13.8333H2"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.33325 1.83331V4.49998"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.33325 7.16669V9.83335"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.6667 12.5V15.1667"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="filter-button">
                  <span>All Priority</span>
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path
                      d="M13.9999 3.16669H9.33325"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.66667 3.16669H2"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 8.5H8"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.33333 8.5H2"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.0001 13.8333H10.6667"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 13.8333H2"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.33325 1.83331V4.49998"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.33325 7.16669V9.83335"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.6667 12.5V15.1667"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="audit-cards">
            {auditQueueData.map((audit, index) => (
              <div
                key={audit.id}
                className={`audit-card ${index % 2 === 0 ? "left" : "right"}`}
              >
                <div className="card-header">
                  <div className="card-title">
                    {getIcon(audit.iconType)}
                    <div className="title-text">
                      <h3 className="audit-title">{audit.title}</h3>
                      <div className="client-info">
                        <span className="client-label">Client : </span>
                        <span className="client-name">{audit.client}</span>
                      </div>
                    </div>
                  </div>

                  <div className="audit-status">
                    <div className="priority-badge high">
                      <span>{audit.priority}</span>
                    </div>
                    <div className="status-badge queued">
                      <span>{audit.status}</span>
                    </div>
                  </div>
                </div>

                <div className="tech-stack">
                  {audit.technologies.map((tech, i) => (
                    <div key={i} className="tech-item">
                      <div
                        className="tech-dot"
                        style={{ backgroundColor: getTechColor(tech) }}
                      ></div>
                      <span className="tech-name">{tech}</span>
                    </div>
                  ))}
                </div>

                <div className="card-details">
                  <div className="detail-item">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M9.33337 12.5L12 9.83331L14.6667 12.5"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.6666 1.83331V4.49998"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 15.1666V9.83331"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 8.06202V4.50002C14 4.1464 13.8595 3.80726 13.6095 3.55721C13.3594 3.30716 13.0203 3.16669 12.6667 3.16669H3.33333C2.97971 3.16669 2.64057 3.30716 2.39052 3.55721C2.14048 3.80726 2 4.1464 2 4.50002V13.8334C2 14.187 2.14048 14.5261 2.39052 14.7762C2.64057 15.0262 2.97971 15.1667 3.33333 15.1667H9.33333"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 7.16669H14"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.33337 1.83331V4.49998"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="detail-label">Submitted :</span>
                    <span className="detail-value">{audit.submitted}</span>
                  </div>

                  <div className="detail-item">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M8.00004 15.1666C11.6819 15.1666 14.6667 12.1819 14.6667 8.49998C14.6667 4.81808 11.6819 1.83331 8.00004 1.83331C4.31814 1.83331 1.33337 4.81808 1.33337 8.49998C1.33337 12.1819 4.31814 15.1666 8.00004 15.1666Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 4.5V8.5H11"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="detail-label">SLA :</span>
                    <span className="detail-value">{audit.sla}</span>
                  </div>

                  <div className="detail-item">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M10.6666 5.16669H14.6666V9.16669"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.6667 5.16669L9.00004 10.8334L5.66671 7.50002L1.33337 11.8334"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="detail-label">Est :</span>
                    <span className="detail-value">{audit.estimate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="background-effects">
        <div className="blur-effect-1"></div>
        <div className="blur-effect-2"></div>
      </div>

      <style jsx>{`
        .auditor-dashboard {
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

        .rating-badge {
          display: flex;
          padding: 8px 16px;
          align-items: center;
          gap: 4px;
          border-radius: 20px;
          background: rgba(207, 91, 20, 0.22);
        }

        .rating-text {
          color: #d96b27;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 12px;
          font-weight: 500;
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

        .tab-bar {
          display: flex;
          padding: 12px;
          align-items: center;
          gap: 12px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: fit-content;
        }

        .tab {
          padding: 12px 36px;
          border-radius: 8px;
          color: #fff;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 16px;
          font-weight: 400;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tab.active {
          background: var(--card-background);
        }

        .tab:hover:not(.active) {
          background: rgba(255, 255, 255, 0.05);
        }

        .audit-queue-section {
          display: flex;
          flex-direction: column;
          gap: 40px;
          padding: 24px;
          border-radius: 16px;
          border: 1px solid rgba(112, 115, 241, 0.5);
          background: var(--card-background);
        }

        .queue-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
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

        .search-filters {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .search-container {
          display: flex;
          width: 280px;
          padding: 12px 24px;
          align-items: center;
          gap: 12px;
          border-radius: 8px;
          border: 1px solid #171819;
          background: rgba(0, 0, 0, 0.55);
        }

        .search-icon {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }

        .search-input {
          background: none;
          border: none;
          color: rgba(251, 251, 251, 0.6);
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 16px;
          outline: none;
          width: 100%;
        }

        .search-input::placeholder {
          color: rgba(251, 251, 251, 0.6);
        }

        .filters {
          display: flex;
          align-items: center;
          gap: 16px;
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

        .audit-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .audit-card {
          padding: 24px;
          border-radius: 12px;
          background: rgba(26, 26, 26, 0.5);
          border: 0.3px solid rgba(255, 255, 255, 0);
          backdrop-filter: blur(1px);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .card-title {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .title-text {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .audit-title {
          color: #fff;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 16px;
          font-weight: 500;
          margin: 0;
        }

        .client-info {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .client-label {
          color: rgba(255, 255, 255, 0.7);
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 14px;
          font-weight: 400;
        }

        .client-name {
          color: #fff;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 14px;
          font-weight: 400;
        }

        .audit-status {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .priority-badge {
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }

        .priority-badge.high {
          background: rgba(195, 2, 5, 0.22);
          color: #c92727;
        }

        .status-badge {
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }

        .status-badge.queued {
          background: rgba(207, 91, 20, 0.22);
          color: #72ffa5;
        }

        .tech-stack {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .tech-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .tech-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .tech-name {
          color: rgba(255, 255, 255, 0.7);
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 12px;
          font-weight: 400;
        }

        .card-details {
          display: flex;
          padding-top: 12px;
          align-items: flex-start;
          gap: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .detail-item {
          display: flex;
          padding: 8px 12px;
          align-items: center;
          gap: 8px;
          border-radius: 8px;
        }

        .detail-label {
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

        .detail-value {
          color: #fff;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 14px;
          font-weight: 500;
        }

        .background-effects {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: -1;
        }

        .blur-effect-1 {
          position: absolute;
          width: 607px;
          height: 189px;
          left: 731px;
          top: 614px;
          background: rgba(132, 133, 235, 0.25);
          border-radius: 50%;
          filter: blur(100px);
        }

        .blur-effect-2 {
          position: absolute;
          width: 345px;
          height: 229px;
          left: -41px;
          top: 621px;
          background: rgba(132, 133, 235, 0.15);
          border-radius: 50%;
          filter: blur(100px);
        }

        @media (max-width: 1024px) {
          .audit-cards {
            grid-template-columns: 1fr;
          }

          .queue-header {
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
          }

          .search-filters {
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
          }
        }

        @media (max-width: 768px) {
          .dashboard-content {
            padding: 20px;
          }

          .state-cards {
            flex-direction: column;
          }

          .header-content {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
