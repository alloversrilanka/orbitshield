interface QuickAction {
  title: string;
  iconSrc: string;
}

const quickActions: QuickAction[] = [
  {
    title: "New Audit",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e37e54e219c72b32ee58e1d7da5886d84f36429b?width=128",
  },
  {
    title: "View Audits",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2dca6d4612dbbedf7265df690a24061f919879fa?width=128",
  },
  {
    title: "View Reports",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5bb1219471228ad08dcd3c39ca13a8f6dc7d1363?width=128",
  },
];

export default function QuickActions() {
  return (
    <div className="quick-actions">
      <div className="quick-actions-header">
        <h2 className="quick-actions-title">Quick Actions</h2>
        <p className="quick-actions-description">Common tasks and shortcuts</p>
      </div>

      <div className="actions-grid">
        {quickActions.map((action, index) => (
          <button key={index} className="action-card">
            <img
              src={action.iconSrc}
              alt={`${action.title} icon`}
              className="action-icon"
            />
            <span className="action-text">{action.title}</span>
          </button>
        ))}
      </div>

      <div className="background-chart">
        <svg
          className="chart-svg"
          width="550"
          height="160"
          viewBox="0 0 550 160"
          fill="none"
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
          <circle cx="186" cy="25" r="4" fill="#968DFF" fillOpacity="0.08" />
          <circle cx="232" cy="25" r="4" fill="#968DFF" fillOpacity="0.08" />
          <circle cx="96" cy="153" r="4" fill="#968DFF" />
          <circle cx="322" cy="125" r="4" fill="#968DFF" />
          <circle cx="277" cy="91" r="4" fill="#968DFF" />
          <circle cx="457" cy="89" r="4" fill="#5356FF" />
          <circle cx="366" cy="91" r="4" fill="white" />
          <circle cx="412" cy="138" r="4" fill="#5356FF" />
          <circle cx="457" cy="121" r="4" fill="#968DFF" />
          <circle cx="546" cy="138" r="4" fill="white" />
          <path
            d="M276.385 160V156.356M276.385 0V13.1887M231.512 160V144.035M231.512 0V24.6421M186.262 160V148.547M186.262 0V26.898M141.012 160L141.006 159.132M95.3854 160V127M49.0042 160V112.451M49.0042 112.451V112.451C49.0042 102.774 56.6762 94.8393 66.3479 94.5136L88.2745 93.7752C92.2399 93.6417 95.3854 90.3885 95.3854 86.4208V86.4208M49.0042 112.451C48.25 115.575 40.8592 118.872 33.9208 118.872H10.8091C6.49626 118.872 3 122.368 3 126.681V126.681V160M322.012 160V125.293M322.012 0V24.4685M366.131 160V144.035M366.131 38.6985C356.327 28.9805 345.392 30.5423 333.325 30.5423C323.672 30.5423 321.761 26.4931 322.012 24.4685M366.131 38.6985C367.388 40.376 371.863 43.6963 379.706 43.5575H388.379H398.917C406.009 43.5575 411.758 49.3069 411.758 56.3991V56.3991V64.9024M366.131 38.6985V67.5054M411.758 160V158.091M456.631 160V122.169M500.373 160V111.931M546 160V128.59V128.59C546 123.171 541.703 118.785 536.284 118.798C530.335 118.812 523.045 118.872 516.588 118.872C505.389 118.872 501.127 114.418 500.373 111.931M95.3854 86.4208V76.3558V76.3558C95.3854 67.155 102.844 59.6963 112.045 59.6963H130.251C133.791 59.6963 137.218 58.444 139.924 56.1609L140.258 55.8785M95.3854 86.4208V127M140.258 55.8785V40.6074V40.6074C142.31 35.3613 147.336 31.8812 152.968 31.8057L176.98 31.4839C180.479 31.437 183.783 29.8652 186.027 27.1803L186.262 26.898M140.258 55.8785L140.632 107.505M186.262 26.898V79.6529M141.006 159.132C140.883 157.686 142.672 154.759 150.817 154.62C156.162 154.529 164.289 154.533 171.021 154.562C176.686 154.587 182.15 152.443 186.262 148.547V148.547M141.006 159.132L140.632 107.505M186.262 148.547V106.03M231.512 118.178C231.01 116.327 227.666 112.625 218.315 112.625C213.292 112.625 207.429 112.625 202.512 112.625C196.443 112.625 190.615 110.259 186.262 106.03V106.03M231.512 118.178V65.9436M231.512 118.178V128.937M186.262 106.03V79.6529M186.262 79.6529C186.64 77.8597 189.883 74.2386 199.838 74.0998C206.215 74.0109 211.901 73.9409 216.122 73.9173C219.772 73.8969 223.361 72.9124 226.472 71.0033V71.0033C227.811 70.1818 228.994 69.1307 229.968 67.8982L231.512 65.9436M231.512 65.9436V24.6421M231.512 24.6421C233.147 23.3695 237.697 20.7202 242.825 20.3037C249.235 19.7831 259.417 21.3449 265.827 19.2625C270.955 17.5965 275.003 14.5192 276.385 13.1887M276.385 13.1887V71.6703M231.135 58.4816C232.015 60.3326 235.962 64.0347 244.71 64.0347C255.646 64.0347 269.975 62.4729 276.385 71.6703M276.385 71.6703V87.2885M276.385 114.013C275.757 116.443 271.936 121.649 261.679 123.037C248.858 124.772 235.283 122.343 231.512 128.937M276.385 114.013V87.2885M276.385 114.013V135.184V156.356M231.512 128.937V144.035M231.512 144.035C232.141 146.117 235.962 150.247 246.219 150.108C259.04 149.935 270.729 148.894 276.385 156.356M276.385 87.2885C276.385 84.9747 279.251 80.1735 290.715 79.4794C305.044 78.6117 315.602 81.9089 322.012 70.9761M322.012 70.9761V54.6638M322.012 70.9761V125.293M322.012 24.4685V54.6638M411.758 64.9024C412.261 66.5221 415.378 69.7961 423.825 69.9349C429.299 70.0249 438.342 70.0225 446.047 69.994C451.88 69.9724 456.631 74.6877 456.631 80.5206V80.5206V87.2885M411.758 64.9024V109.501M322.012 54.6638C322.39 56.5727 325.406 60.7375 334.456 62.1258C345.769 63.8612 360.852 59.6963 366.131 67.5054M366.131 67.5054V113.753M366.131 113.753C365 115.517 360.324 119.254 350.671 120.087C338.604 121.128 328.046 118.004 322.012 125.293M366.131 113.753V144.035M366.131 144.035C367.263 145.828 371.41 149.553 378.952 150.108C388.379 150.803 404.217 147.332 411.758 158.091M411.758 158.091V109.501M411.758 109.501C411.758 111.641 414.172 116.13 423.825 116.963C435.892 118.004 449.844 114.36 456.631 122.169M456.631 122.169V87.2885M456.631 87.2885C457.008 89.3709 463.192 93.5358 472.846 93.5358C476.873 93.5358 481.258 93.5358 485.45 93.5358C493.692 93.5358 500.373 100.218 500.373 108.46V108.46V111.931M140.632 107.505C139.422 110.337 135.2 116 128 116C124.363 116 119.128 116 114.085 116C106.317 116 99.1595 120.21 95.3854 127V127"
            stroke="url(#paint0_linear_125_856)"
            strokeWidth="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_125_856"
              x1="276.763"
              y1="0"
              x2="274.392"
              y2="193.993"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.231277" stopColor="#B1B2FC" stopOpacity="0.2" />
              <stop offset="0.505016" stopColor="#9193FF" stopOpacity="0.8" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="background-blur"></div>

      <style jsx>{`
        .quick-actions {
          position: relative;
          width: 100%;
          height: 203px;
          border-radius: 16px;
          border: 1.5px solid rgba(45, 46, 118, 0.59);
          background: var(--card-background);
          padding: 24px;
          overflow: hidden;
        }

        .quick-actions-header {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 32px;
        }

        .quick-actions-title {
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

        .quick-actions-description {
          color: rgba(255, 255, 255, 0.7);
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

        .actions-grid {
          position: absolute;
          right: 24px;
          top: 24px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          width: 560px;
          height: 155px;
        }

        .action-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 20px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(112, 115, 241, 0.57);
          background: rgba(13, 13, 13, 0.5);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .action-card:hover {
          border-color: rgba(112, 115, 241, 0.8);
          background: rgba(13, 13, 13, 0.7);
          transform: translateY(-2px);
        }

        .action-icon {
          width: 64px;
          height: 64px;
          object-fit: contain;
        }

        .action-text {
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
          text-align: center;
        }

        .background-chart {
          position: absolute;
          bottom: 20px;
          left: 72px;
          width: 550px;
          height: 160px;
          pointer-events: none;
          opacity: 0.7;
        }

        .chart-svg {
          width: 100%;
          height: 100%;
        }

        .background-blur {
          position: absolute;
          bottom: 79px;
          left: 0;
          width: 335px;
          height: 92px;
          background: rgba(107, 109, 239, 0.25);
          border-radius: 50%;
          filter: blur(67.5px);
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .actions-grid {
            position: static;
            width: 100%;
            margin-top: 20px;
          }

          .background-chart {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .quick-actions {
            height: auto;
            min-height: 200px;
          }

          .actions-grid {
            grid-template-columns: 1fr;
            gap: 12px;
            height: auto;
          }

          .action-card {
            flex-direction: row;
            text-align: left;
            padding: 16px;
          }

          .action-icon {
            width: 48px;
            height: 48px;
          }

          .background-blur {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
