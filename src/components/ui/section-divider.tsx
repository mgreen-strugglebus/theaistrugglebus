export function WavyDivider() {
  return (
    <div className="wavy-divider" aria-hidden="true" />
  );
}

export function RoadDivider() {
  return (
    <div className="flex items-center justify-center py-8" aria-hidden="true">
      <svg
        viewBox="0 0 200 20"
        className="h-5 w-48 text-secondary"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="10"
          x2="200"
          y2="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="12 8"
        />
      </svg>
    </div>
  );
}
