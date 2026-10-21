import type { Metadata } from "next";

/** Page title "<name> · Apporine", with a meta description. */
export function pageMetadata(name: string, description: string): Metadata {
  return { title: `${name} · Apporine`, description };
}
