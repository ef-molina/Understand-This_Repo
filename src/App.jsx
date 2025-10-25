import React, { useMemo, useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SectionTitle from './components/SectionTitle';
import ProjectCard from './components/ProjectCard';
import TagFilter from './components/TagFilter';
import Hero from './components/Hero';
import Modal from './components/Modal';
import Button from './components/ui/Button';
import MarkdownViewer from './components/MarkdownViewer';
import Card from './components/ui/Card';
import { PROJECTS } from './data/projects';

export default function App() {
  const [brand, setBrand] = useState('UnderstandThisRepo.dev');
  const [q, setQ] = useState('');
  const [active, setActive] = useState(null);
  const [tag, setTag] = useState('all');

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) =>
      (tag === 'all' || p.tags.includes(tag)) &&
      (q.trim().length === 0 || p.name.toLowerCase().includes(q.toLowerCase()) || p.summary.toLowerCase().includes(q.toLowerCase()))
    );
  }, [q, tag]);

  const allTags = useMemo(() => ['all', ...Array.from(new Set(PROJECTS.flatMap(p => p.tags)))], []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-50">
      <Header brand={brand} setBrand={setBrand} />

      <Hero q={q} setQ={setQ} onBrowseClick={() => window.scrollTo({ top: document.body.clientHeight, behavior: 'smooth' })}>
        <TagFilter active={tag} onChange={setTag} tags={allTags} />
      </Hero>

      <section className="max-w-6xl mx-auto px-4 pb-16" id="examples">
        <SectionTitle eyebrow="Examples" title="Popular projects explained like a human would" subtitle="Click a card to see a sample onboarding doc." />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16" id="how">
        <SectionTitle eyebrow="How it works" title="A tiny spec, a friendly doc, and optional tooling" subtitle="We keep a simple convention: add docs/Onboarding.md with entry points, folder tour, and a happy path." />
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Card>
            <h4 className="font-semibold mb-2">1) Start with the template</h4>
            <p className="text-sm text-black/70 dark:text-white/70">Copy our minimal outline and fill in the human parts. Link to deeper docs instead of duplicating.</p>
          </Card>
          <Card>
            <h4 className="font-semibold mb-2">2) Add a quickstart</h4>
            <p className="text-sm text-black/70 dark:text-white/70">Three commands to run locally, plus entry files to open first. That’s the activation energy drop.</p>
          </Card>
          <Card>
            <h4 className="font-semibold mb-2">3) Keep it fresh</h4>
            <p className="text-sm text-black/70 dark:text-white/70">Optional GitHub Action nudges PRs that change core folders to glance at Onboarding.md.</p>
          </Card>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-24" id="contribute">
        <SectionTitle eyebrow="Contribute" title="Help explain a project you love" subtitle="Add an Onboarding.md to any repo and share it with us. We’ll feature the best guides." />
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="https://github.com/">Contribute a guide</Button>
          <Button variant="outline" href="https://github.com/">Add the CI nudge</Button>
        </div>
      </section>

      <Footer />

      {active && (
        <Modal title={`${active.name} — sample Onboarding.md`} onClose={() => setActive(null)} actions={<Button variant="outline" href={active.repoUrl}>Open repo</Button>}>
          <MarkdownViewer text={active.onboarding} />
        </Modal>
      )}
    </div>
  );
}
