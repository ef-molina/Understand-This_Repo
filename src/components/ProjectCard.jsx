import Card from './ui/Card';
import Button from './ui/Button';
import Badge from './ui/Badge';

export default function ProjectCard({ project, onOpen }) {
  return (
    <Card>
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-lg">{project.name}</h3>
            <p className="text-sm text-black/70 dark:text-white/70 mt-1">{project.summary}</p>
          </div>
          <div className="text-xs text-black/60 dark:text-white/60">⭐ {project.stars.toLocaleString()}</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <div className="flex gap-2 pt-1">
          <Button onClick={() => onOpen(project)}>View onboarding</Button>
          <Button variant="outline" href={project.repoUrl}>Open repo</Button>
        </div>
      </div>
    </Card>
  );
}
