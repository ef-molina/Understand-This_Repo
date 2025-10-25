import Button from './ui/Button';

export default function Modal({ title, children, onClose, actions }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="max-w-2xl w-full bg-white dark:bg-zinc-950 rounded-2xl border shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="font-semibold">{title}</div>
          <button className="text-xl" onClick={onClose}>×</button>
        </div>
        <div className="p-4 max-h-[70vh] overflow-auto">{children}</div>
        <div className="p-4 border-t flex justify-end gap-2">
          {actions}
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
}
