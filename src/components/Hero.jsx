import Button from './ui/Button';
import Card from './ui/Card';

export default function Hero({ q, setQ, onBrowseClick, children }) {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-14 pb-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight">
            🗺️ Understand any repo in plain English.
          </h1>
          <p className="mt-4 text-lg text-black/70 dark:text-white/70">
            Open-source shouldn’t feel like wandering a maze.
  We break down popular projects into simple, human explanations — showing you where the entry point is, what each folder does, and how data flows through the system.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex rounded-2xl border px-3 py-2 items-center gap-2 bg-white/60 dark:bg-zinc-950/60">
              <span>🔎</span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search projects or concepts…"
                className="w-full bg-transparent outline-none"
              />
            </div>
            <Button variant="primary" onClick={onBrowseClick}>Browse examples</Button>
          </div>
          {children}
        </div>
        <div className="md:pl-6">
          <Card>
            <div className="p-4">
              <div className="text-sm uppercase tracking-widest text-black/60 dark:text-white/60 mb-2">Preview</div>
              <div className="rounded-xl border bg-white dark:bg-zinc-950 p-4">
                <div className="text-xs text-black/60 dark:text-white/60 mb-2">docs/Onboarding.md</div>
                <div className="text-sm">
                  <div className="font-bold">What this project does</div>
                  <div>One-liner in plain English.</div>
                  <div className="mt-3 font-bold">Where to start reading code</div>
                  <div>server.js → routes → service → repo</div>
                  <div className="mt-3 font-bold">Run it locally</div>
                  <pre className="text-xs bg-black/5 dark:bg-white/5 rounded p-2">npm i\ndocker compose up -d\nnpm run dev</pre>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
