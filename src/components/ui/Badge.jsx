export default function Badge({ children, className = "" }) {
  return (
    <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${className}`}>
      {children}
    </span>
  );
}
