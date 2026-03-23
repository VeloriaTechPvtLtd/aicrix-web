import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ notFound: ['404'] }];
}

/**
 * Catch-all for unknown routes (e.g. /ahsjgfjka).
 * Requires at least one segment so / still goes to the home page.
 */
export default function CatchAllNotFound() {
  notFound();
}
