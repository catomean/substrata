/**
 * Substrata's own identity and link helper.
 *
 * Replaces what the renderers used to import from OrangeCat (`siteHref`,
 * `siteCanonicalHost`, a `HostedSite` record). Substrata is not hosted inside
 * another application any more, so a link is just a path and the canonical host
 * is a constant.
 */
export const SITE = {
  name: 'Substrata',
  host: 'substrata.orangecat.ch',
} as const;

/** An in-site link. Root is '/', everything else '/segment'. */
export function href(path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${clean}` : '/';
}
