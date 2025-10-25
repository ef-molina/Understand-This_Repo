export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white/5 backdrop-blur p-4 ${className}`}>
      {children}
    </div>
  );
}
