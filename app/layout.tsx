import type { Metadata } from 'next';
import './globals.css';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: { default: SITE.name, template: `%s · ${SITE.name}` },
  description:
    'Open-source research on the physical chokepoints between here and a technological singularity.',
  metadataBase: new URL(`https://${SITE.host}`),
  openGraph: { siteName: SITE.name, type: 'website' },
};

/**
 * Substrata's root layout.
 *
 * Deliberately bare: no analytics, no third-party script, no widget, no
 * structured data belonging to anyone else. Everything that renders here is
 * Substrata's. That is not minimalism for its own sake — the previous version
 * of this site inherited another product's header, tracking and Organization
 * schema, and told crawlers it was a different company.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
