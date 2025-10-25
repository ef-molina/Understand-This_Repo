import { useMemo } from 'react';

// Tiny markdown renderer (headings, bold/italic, code fences, code spans)
export default function MarkdownViewer({ text }) {
  const html = useMemo(() => {
    let t = text
      .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-6 mb-3">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-8 mb-4">$1</h1>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      .replace(/`([^`]+)`/gim, '<code class="px-1 py-0.5 rounded bg-black/10 dark:bg-white/10">$1</code>')
      .replace(/\n\n-/g, '\n\n•')
      .replace(/\n/g, '<br/>');
    t = t.replace(/```([\s\S]*?)```/g, (_m, code) => {
      return `<pre class="p-3 rounded-lg bg-black/5 dark:bg-white/5 overflow-x-auto text-sm">${
        code.replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }</pre>`;
    });
    return t;
  }, [text]);
  return <div className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: html }} />;
}
