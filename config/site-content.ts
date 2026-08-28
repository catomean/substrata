/**
 * Hosted-site content model — now owned by `sitekit`.
 *
 * The section union, page/chrome shapes and the helpers were extracted to the
 * shared package (github:bitbaum/sitekit) on 2026-08-28; substrata is its
 * reference consumer. This file keeps two things only: the re-exports, so the
 * rest of the app keeps one import path, and the wiring that says WHICH pages
 * this site has. Content itself stays in `site-substrata.ts`.
 *
 * Extending the section set happens in sitekit — a new kind lands there with
 * its schema, renderer and tests, and every generated site gets it on the
 * next version bump. That is the point of the extraction.
 */

export type {
  SiteStat,
  SiteCard,
  SiteDefinition,
  SiteIndexEntry,
  SiteSection,
  SitePage,
  SiteChrome,
  SiteNavItem,
} from 'sitekit';

export { siteNavItems, pageRendersOwnHeader, sitePageAt } from 'sitekit';

import type { SiteChrome, SitePage } from 'sitekit';
import { substrataSiteChrome, substrataSitePages } from './site-substrata';

export function sitePages(): SitePage[] {
  return substrataSitePages();
}

export function siteChrome(): SiteChrome {
  return substrataSiteChrome();
}
