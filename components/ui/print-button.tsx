"use client";
import { Icon } from "./icon";
export function PrintButton() {
  return (
    <button type="button" className="button button-primary" onClick={() => window.print()}>
      Print / save PDF <Icon name="download" />
    </button>
  );
}
