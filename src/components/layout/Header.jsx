import Button from "../ui/Button";

export default function Header({ brand, setBrand }) {
  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-white/60 dark:bg-zinc-900/60 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">🗺️</span>
          <input
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="bg-transparent outline-none font-semibold text-lg rounded px-1 hover:bg-black/5 dark:hover:bg-white/5"
          />
        </div>
        <div className="hidden sm:flex gap-2">
          <Button variant="ghost" href="#how">How it works</Button>
          <Button variant="ghost" href="#contribute">Contribute</Button>
          <Button href="https://github.com/" variant="primary">Star on GitHub</Button>
        </div>
      </div>
    </header>
  );
}
