export function isActive(currentPath: string, href: string): boolean {
  if (href === "/") return currentPath === "/";
  return currentPath.startsWith(href);
}

export function splitTitleEmphasis(
  title: string,
  emphasis?: string,
): { head: string; em: string } {
  if (emphasis) {
    const idx = title.indexOf(emphasis);
    if (idx >= 0) {
      return { head: title.slice(0, idx).trim(), em: emphasis.trim() };
    }
  }
  const match = title.match(/^(.*?[:—–])\s+(.+)$/);
  if (match) return { head: match[1], em: match[2] };
  return { head: title, em: "" };
}
