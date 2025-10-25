export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {eyebrow && (
        <div className="mb-2 text-xs uppercase tracking-widest text-black/60 dark:text-white/60">{eyebrow}</div>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-black/70 dark:text-white/70">{subtitle}</p>
      )}
    </div>
  );
}
