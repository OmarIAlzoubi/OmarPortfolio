import type { ReactNode, SVGProps } from "react";
export type IconName =
  | "arrow"
  | "right"
  | "up"
  | "close"
  | "spark"
  | "github"
  | "chevron"
  | "menu"
  | "download"
  | "search"
  | "voice"
  | "vision"
  | "layers"
  | "chart";
export function Icon({ name = "arrow", ...props }: SVGProps<SVGSVGElement> & { name?: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M5 19 19 5M5 5h14v14" />,
    right: <path d="M4 12h16m-6-6 6 6-6 6" />,
    up: <path d="M12 19V5m-6 6 6-6 6 6" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    spark: <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" />,
    github: (
      <path d="M9 19c-4 1-4-2-6-2m12 5v-3.9c0-1 .1-1.4-.5-2 3.5-.4 7-1.7 7-7.5 0-1.5-.5-2.8-1.4-3.8.1-.4.6-1.9-.1-3.8 0 0-1.1-.4-3.9 1.4a13.6 13.6 0 0 0-7.2 0C5.6.6 4.5 1 4.5 1c-.7 1.9-.2 3.4-.1 3.8A5.5 5.5 0 0 0 3 8.6c0 5.8 3.5 7.1 7 7.5-.5.5-.6 1.1-.6 2V22" />
    ),
    chevron: <path d="m6 9 6 6 6-6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    download: <path d="M12 3v12m-5-5 5 5 5-5M5 17v4h14v-4" />,
    search: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="m15 15 5 5" />
      </>
    ),
    voice: (
      <>
        <rect x="9" y="3" width="6" height="12" rx="3" />
        <path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8" />
      </>
    ),
    vision: (
      <>
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    layers: <path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5" />,
    chart: <path d="M4 3v17h17M8 15v-4m5 4V7m5 8V4" />,
  };
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
