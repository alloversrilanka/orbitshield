export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-content">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3b911f435432aa4b0e3eb4b196aeeb4cb8a09c5?width=337"
          alt="Orbitshield Logo"
          className="logo"
        />

        <div className="nav-actions">
          <div className="search-container">
            <svg
              className="search-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                stroke="white"
                strokeOpacity="0.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 14L11.1334 11.1333"
                stroke="white"
                strokeOpacity="0.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="text" placeholder="Search" className="search-input" />
          </div>

          <div className="user-actions">
            <button className="icon-button glassmorphism">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button className="icon-button glassmorphism">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3C10.8065 4.19347 10.136 5.81217 10.136 7.5C10.136 9.18783 10.8065 10.8065 12 12C13.1935 13.1935 14.8122 13.864 16.5 13.864C18.1878 13.864 19.8065 13.1935 21 12C21 13.78 20.4722 15.5201 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89472 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17294 13.7558C2.82567 12.01 3.0039 10.2004 3.68509 8.55585C4.36628 6.91131 5.51983 5.50571 6.99987 4.51677C8.47991 3.52784 10.22 3 12 3Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9e6792039ae620b6890357c75e3c929eee4b918?width=80"
              alt="User Avatar"
              className="user-avatar"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .navigation {
          display: flex;
          width: 100%;
          padding: 20px 32px;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #171819;
          height: 92px;
        }

        .nav-content {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          width: 168.331px;
          height: 52px;
          flex-shrink: 0;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 64px;
        }

        .search-container {
          display: flex;
          width: 280px;
          padding: 12px 24px;
          align-items: center;
          gap: 12px;
          border-radius: 8px;
          border: 1px solid #171819;
          background: rgba(13, 13, 13, 0.6);
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
          font-weight: 400;
          outline: none;
          width: 100%;
        }

        .search-input::placeholder {
          color: rgba(251, 251, 251, 0.6);
        }

        .user-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .icon-button {
          display: flex;
          padding: 8px;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .icon-button:hover {
          opacity: 0.8;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50px;
        }

        @media (max-width: 768px) {
          .navigation {
            padding: 16px 20px;
          }

          .nav-actions {
            gap: 32px;
          }

          .search-container {
            width: 200px;
          }

          .logo {
            width: 120px;
            height: 37px;
          }
        }
      `}</style>
    </nav>
  );
}
