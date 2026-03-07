'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, Shield, Mail, Info } from 'lucide-react';

const items = [
  { href: '/terms-and-conditions', label: 'Terms', icon: FileText },
  { href: '/privacy-policy', label: 'Privacy', icon: Shield },
  { href: '/contact-us', label: 'Contact', icon: Mail },
  { href: '/about-us', label: 'About', icon: Info },
] as const;

export const BottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav" aria-label="Legal and info">
      <div className="bottom-nav-inner">
        {items.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`bottom-nav-item ${isActive ? 'active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className="bottom-nav-icon" size={22} strokeWidth={2} />
              <span className="bottom-nav-label">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
