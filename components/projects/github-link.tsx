import { projectLinks } from "@/data/project-links";
import { Icon } from "@/components/ui/icon";
export function GithubLink({ id, name }: { id: string; name: string }) {
  const link = projectLinks[id];
  return link?.github ? (
    <a
      className="project-github"
      href={link.github}
      target="_blank"
      rel="noreferrer"
      aria-label={`View ${name} on GitHub (opens in a new tab)`}
    >
      <Icon name="github" width="15" height="15" /> View on GitHub <Icon width="14" height="14" />
    </a>
  ) : (
    <span className="repository-pending">Repository coming soon</span>
  );
}
