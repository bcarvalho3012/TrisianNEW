// Every internal link and asset path goes through here, so the base path lives in one place.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Internal page link, always with a trailing slash: url('plans') -> /TrisianNEW/plans/ */
export function url(path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const [route, hash] = clean.split('#');
  const href = route ? `${base}/${route}/` : `${base}/`;
  return hash ? `${href}#${hash}` : href;
}

/** Static asset in /public: asset('fonts/Graphik-Light.woff2') */
export function asset(path: string): string {
  return `${base}/${path.replace(/^\/+/, '')}`;
}
