export default function Card({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.25)]",
        "backdrop-blur-md",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

