/**
 * Substrata's masthead and footer.
 *
 * The masthead is a rule, not a bar. It sticks so the section nav stays
 * reachable on a long research page, but it carries no shadow, no fill beyond
 * the page's own surface, and no logo — a hairline and a wordmark are enough,
 * and anything heavier competes with the document.
 *
 * There is no "hosted on" line. Substrata runs on a subdomain of a domain its
 * founder happens to own; that is an address, not an affiliation, and a
 * research firm's footer has no business advertising someone else's product.
 */

import React from 'react';
import Link from 'next/link';
import { href, SITE } from '@/lib/site';
import type { SiteChrome as SiteChromeSpec, SiteNavItem } from '@/config/site-content';
import { SiteNav } from './SiteNav';

interface Props {
  chrome: SiteChromeSpec;
  navItems: SiteNavItem[];
  currentPath: string;
}

export function SiteMasthead({ chrome, navItems, currentPath }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-subtle bg-surface-page/85 backdrop-blur">
      <div className="mx-auto max-w-shell px-4 sm:px-6 lg:px-8">
        {/* One row at every width. Wrapping the nav onto a second line made a
            sticky masthead eat a third of a phone screen, so on narrow
            viewports the nav scrolls sideways instead. */}
        <div className="flex items-center justify-between gap-6 py-4">
          <Link href={href()} className="shrink-0">
            <span className="font-heading text-lg font-semibold tracking-display text-fg-primary">
              {chrome.name}
            </span>
          </Link>

          <SiteNav items={navItems} currentPath={currentPath} />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ chrome }: { chrome: SiteChromeSpec }) {
  return (
    <footer className="mt-24 border-t border-subtle">
      <div className="mx-auto max-w-shell px-4 py-12 sm:px-6 lg:px-8">
        <p className="max-w-prose text-sm leading-relaxed text-fg-secondary">{chrome.footerNote}</p>
        <div className="mt-8 flex flex-col gap-2 border-t border-subtle pt-6 font-mono text-xs uppercase tracking-caps text-fg-muted sm:flex-row sm:items-center sm:justify-between">
          <span>{SITE.host}</span>
          <span className="normal-case tracking-normal">© {SITE.name}</span>
        </div>
      </div>
    </footer>
  );
}
