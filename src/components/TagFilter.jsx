
export default function TagFilter({ active, onChange, tags }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2 text-sm">
      {tags.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`px-3 py-1 rounded-full border ${active===t? 'bg-black text-white':'hover:bg-black/5 dark:hover:bg-white/5'}`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
