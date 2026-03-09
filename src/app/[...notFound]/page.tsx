import { notFound } from "next/navigation";

/**
 * Catch-all for unknown routes (e.g. /ahsjgfjka).
 * Requires at least one segment so / still goes to the home page.
 */
export default function CatchAllNotFound() {
  notFound();
}
