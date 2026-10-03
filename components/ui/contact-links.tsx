import { contact } from "@/data/contact";
export function ContactLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`contact-links ${className}`}>
      <a href={`mailto:${contact.email}`}>{contact.email}</a>
      <a href={contact.phoneHref}>{contact.phone}</a>
      <a href={contact.linkedin} target="_blank" rel="noreferrer">
        {contact.linkedin.replace(/^https?:\/\/(www\.)?/, "")}
      </a>
      <a href={contact.github} target="_blank" rel="noreferrer">
        {contact.github.replace(/^https?:\/\/(www\.)?/, "")}
      </a>
    </div>
  );
}
