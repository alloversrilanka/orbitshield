"use client";

interface StateCardProps {
  title: string;
  value: string;
  description: string;
  iconSrc: string;
}

export default function StateCard({
  title,
  value,
  description,
  iconSrc,
}: StateCardProps) {
  return (
    <div className="state-card">
      <div className="state-card-content">
        <div className="state-card-header">
          <h3 className="state-card-title">{title}</h3>
          <img
            src={iconSrc}
            alt={`${title} icon`}
            className="state-card-icon"
          />
        </div>

        <div className="state-card-value">
          <span className="state-card-value-text">{value}</span>
          <p className="state-card-description">{description}</p>
        </div>
      </div>

      <div className="background-effects">
        <div className="blur-effect-1"></div>
        <div className="blur-effect-2"></div>
      </div>

      <style jsx>{`
        .state-card {
          position: relative;
          height: 183px;
          flex: 1;
          min-width: 250px;
          background: var(--card-background);
          border-radius: var(--radius-sm);
          border: 1px solid rgba(74, 77, 236, 0);
          padding: 24px;
          overflow: hidden;
        }

        .state-card-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .state-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .state-card-title {
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
          margin: 0;
        }

        .state-card-icon {
          width: 64px;
          height: 64px;
          object-fit: contain;
        }

        .state-card-value {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .state-card-value-text {
          color: #fff;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 32px;
          font-weight: 700;
          line-height: normal;
        }

        .state-card-description {
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

        .background-effects {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .blur-effect-1 {
          position: absolute;
          width: 190px;
          height: 158px;
          right: -50px;
          top: -20px;
          background: rgba(107, 109, 239, 0.8);
          border-radius: 50%;
          filter: blur(100px);
        }

        .blur-effect-2 {
          position: absolute;
          width: 185px;
          height: 158px;
          left: -30px;
          bottom: -30px;
          background: rgba(0, 0, 0, 0.66);
          border-radius: 50%;
          filter: blur(100px);
        }

        @media (max-width: 768px) {
          .state-card {
            min-width: 100%;
            height: 160px;
            padding: 20px;
          }

          .state-card-icon {
            width: 48px;
            height: 48px;
          }

          .state-card-value-text {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}
