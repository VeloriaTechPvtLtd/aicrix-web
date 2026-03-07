import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import './page-layout-aicrix.css';

/**
 * Shared layout for policy/info pages (About, Contact, Privacy, Terms).
 * Theme matches AICRIX landing (--bg, --accent, Inter).
 */
export const PageLayout = ({ title, lastUpdated, children }: { title: string; lastUpdated?: string; children: ReactNode }) => {
    return (
        <div className="page-layout-aicrix">
            <nav className="page-nav" aria-label="Breadcrumb and back">
                <Link href="/" className="page-nav-logo">AI<span>CRIX</span></Link>
                <Link href="/" className="page-nav-back">
                    <ArrowLeft size={18} strokeWidth={2} />
                    <span>Back</span>
                </Link>
            </nav>

            <main id="main-content">
            <div className="page-content-wrap">
                <div className="page-glow" aria-hidden />
                <div className="container mx-auto px-4 sm:px-8 max-w-4xl relative z-10">
                    <div className="mb-6 md:mb-10 lg:mb-14">
                        <h1 className="page-title">{title}</h1>
                        {lastUpdated && (
                            <p className="page-last-updated">Last updated: {lastUpdated}</p>
                        )}
                    </div>
                    <div className="prose-content space-y-6 md:space-y-8">
                        {children}
                    </div>
                </div>
            </div>
            </main>

            <footer className="page-footer">
                <div className="container mx-auto px-4 sm:px-8 max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                    <span className="page-footer-copy">&copy; {new Date().getFullYear()} AICRIX. All rights reserved.</span>
                    <div className="flex items-center gap-5">
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms-and-conditions">Terms</Link>
                        <Link href="/contact-us">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

/** Reusable section component – AICRIX theme */
export const Section = ({ title, children }: { title?: string; children: ReactNode }) => (
    <div>
        {title && <h2 className="page-section-title">{title}</h2>}
        <div className="page-section-body space-y-3">{children}</div>
    </div>
);

/** Reusable info row – AICRIX theme */
export const InfoRow = ({ label, value, href }: { label: string; value: string; href?: string }) => (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 py-2 page-info-row">
        <span className="page-info-row-label w-40 shrink-0">{label}</span>
        {href ? (
            <a href={href} className="page-info-row-value break-all">{value}</a>
        ) : (
            <span className="page-info-row-value">{value}</span>
        )}
    </div>
);
