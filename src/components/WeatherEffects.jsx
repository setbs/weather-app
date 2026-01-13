import { useMemo } from "react";

function range(n) {
  return Array.from({ length: n }, (_, i) => i);
}

function WeatherEffects({ type }) {
  const drops = useMemo(() => range(60).map((i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 0.8 + Math.random() * 0.8,
    size: 0.6 + Math.random() * 1.4,
  })), []);

  const flakes = useMemo(() => range(60).map((i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 3,
    size: 2 + Math.random() * 4,
  })), []);

  const streaks = useMemo(() => range(30).map((i) => ({
    id: i,
    top: Math.random() * 100,
    delay: Math.random() * 1.2,
    duration: 2.5 + Math.random() * 1.5,
    width: 60 + Math.random() * 140,
  })), []);

  return (
    <div className="weather-effects" aria-hidden>
      {type === "rain" && (
        <div className="effect-rain">
          {drops.map((d) => (
            <span
              key={d.id}
              className="drop"
              style={{
                left: `${d.left}%`,
                animationDelay: `${d.delay}s`,
                animationDuration: `${d.duration}s`,
                width: `${d.size}px`,
                height: `${d.size * 8}px`,
              }}
            />
          ))}
        </div>
      )}

      {type === "snow" && (
        <div className="effect-snow">
          {flakes.map((f) => (
            <span
              key={f.id}
              className="flake"
              style={{
                left: `${f.left}%`,
                animationDelay: `${f.delay}s`,
                animationDuration: `${f.duration}s`,
                fontSize: `${f.size}px`,
              }}
            >•</span>
          ))}
        </div>
      )}

      {type === "wind" && (
        <div className="effect-wind">
          {streaks.map((s) => (
            <span
              key={s.id}
              className="wind-streak"
              style={{
                top: `${s.top}%`,
                animationDelay: `${s.delay}s`,
                animationDuration: `${s.duration}s`,
                width: `${s.width}px`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default WeatherEffects;
