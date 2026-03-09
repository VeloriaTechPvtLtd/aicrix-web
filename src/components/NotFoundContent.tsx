import Link from "next/link";
import { Home } from "lucide-react";
import { PageLayout } from "@/features/pages/PageLayout";

export function NotFoundContent() {
  return (
    <PageLayout title="Page not found">
      <div className="p-4 sm:p-6 rounded-2xl page-card max-w-md">
        <p className="text-sm font-semibold mb-2 tracking-wider" style={{ color: "var(--accent)" }}>
          404
        </p>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="page-btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold no-underline text-sm transition-all"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </PageLayout>
  );
}
