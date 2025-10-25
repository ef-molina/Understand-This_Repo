export default function Button({ children, onClick, href, variant = "primary", className = "", ...props }) {
  const base = "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2";
  const styles = variant === "primary"
    ? "bg-black/90 text-white hover:bg-black"
    : variant === "ghost"
    ? "hover:bg-black/5"
    : variant === "outline"
    ? "border hover:bg-black/5"
    : "";
  if (href) {
    return (
      <a className={`${base} ${styles} ${className}`} href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={`${base} ${styles} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
