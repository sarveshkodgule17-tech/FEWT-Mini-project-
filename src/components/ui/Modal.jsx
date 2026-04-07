import { useEffect } from "react";

export default function Modal({ open, title, children, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#0b1020]/90 p-5 text-slate-100 shadow-2xl backdrop-blur">
        {title ? <div className="mb-3 text-lg font-semibold">{title}</div> : null}
        <div className="text-sm text-slate-200">{children}</div>
      </div>
    </div>
  );
}

