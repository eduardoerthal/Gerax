import carro from "../assets/carro.png";
import "./LiveTrackingMap.css";

export function LiveTrackingMap() {
  return (
    <div
      className="tracking-map"
      role="img"
      aria-label="Painel de monitoramento da frota Gerax mostrando rotas e veículos em movimento"
    >
      <header className="tracking-map__header">
        <div className="tracking-map__status">
          <span className="tracking-map__pulse" aria-hidden="true" />
          Monitoramento ao vivo
        </div>
        <span className="tracking-map__count">8 veículos</span>
      </header>

      <div className="tracking-map__canvas">
        <svg
          viewBox="0 0 320 200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="tm-streets"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect width="40" height="40" fill="#eef2fb" />
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#fff"
                strokeWidth="1.5"
              />
            </pattern>

            <symbol id="tm-pin" viewBox="-10 -10 20 20">
              <circle r="9" fill="currentColor" opacity="0.18" />
              <circle r="5" fill="currentColor" />
              <circle r="2" fill="#fff" />
            </symbol>

            <path
              id="tm-route-primary"
              d="M 28 170 C 80 130, 130 150, 175 105 C 210 70, 260 78, 296 50"
            />
            <path
              id="tm-route-secondary"
              d="M 50 32 C 100 60, 90 112, 130 140 C 170 168, 240 156, 290 184"
            />
          </defs>

          <rect width="320" height="200" fill="url(#tm-streets)" />

          <path d="M 0 110 H 320" stroke="#fff" strokeWidth="5" />
          <path d="M 180 0 V 200" stroke="#fff" strokeWidth="5" />

          <use
            href="#tm-route-secondary"
            fill="none"
            stroke="#d0daf5"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="6 4"
          />

          <use
            href="#tm-route-primary"
            fill="none"
            stroke="#2fa84f"
            strokeOpacity="0.18"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <use
            href="#tm-route-primary"
            fill="none"
            stroke="#2fa84f"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          <use href="#tm-pin" x="28" y="170" color="#002AAD" />
          <use href="#tm-pin" x="296" y="50" color="#2fa84f" />

          <g className="tracking-map__satellite">
            <circle r="4" fill="#002AAD" stroke="#fff" strokeWidth="2" />
            <animateMotion dur="9s" repeatCount="indefinite">
              <mpath href="#tm-route-secondary" />
            </animateMotion>
          </g>

          <g className="tracking-map__vehicle">
            <image
              href={carro}
              width="44"
              height="28"
              x="-22"
              y="-14"
              preserveAspectRatio="xMidYMid meet"
            />
            <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
              <mpath href="#tm-route-primary" />
            </animateMotion>
          </g>
        </svg>
      </div>

      <footer className="tracking-map__footer">
        <div className="tracking-map__metric">
          <strong>847 km</strong>
          <small>rodados hoje</small>
        </div>
        <div className="tracking-map__metric">
          <strong>2</strong>
          <small>alertas ativos</small>
        </div>
        <div className="tracking-map__metric">
          <strong>98%</strong>
          <small>disponibilidade</small>
        </div>
      </footer>
    </div>
  );
}
