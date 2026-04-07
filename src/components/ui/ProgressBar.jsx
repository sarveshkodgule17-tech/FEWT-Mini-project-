export default function ProgressBar({ value = 0, className = "" }) {
  const clamped = Math.max(0, Math.min(100, Number(value) || 0));

  return (
    <div className={["w-full", className].join(" ")}>
      <div className="h-2 w-full rounded-full bg-white/10">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-300 transition-[width] duration-500"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}

