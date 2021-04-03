export const hashRE = /#.*$/;
export const extRE = /\.(md|html)$/;
export const endingSlashRE = /\/$/;
export const outboundRE = /^(https?:|mailto:|tel:)/;

export function normalize (path) {
  return decodeURI(path).replace(hashRE, '').replace(extRE, '');
}

export function isExternal (path) {
  return outboundRE.test(path);
}

export function isMailto (path) {
  return /^mailto:/.test(path);
}

export function isTel (path) {
  return /^tel:/.test(path);
}

export function ensureExt (path) {
  if (isExternal(path)) {
    return path;
  }
  const hashMatch = path.match(hashRE);
  const hash = hashMatch ? hashMatch[0] : '';
  const normalized = normalize(path);

  if (endingSlashRE.test(normalized)) {
    return path;
  }
  return normalized + '.html' + hash;
}

// 向 head 中添加 style
export function addLinkToHead (href) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;

  document.head.append(link);
}

// 向 head 中添加 script
export function addScriptToHead (href) {
  const script = document.createElement('script');
  script.src = href;

  document.head.append(script);
}

export function resolveNavLinkItem (linkItem) {
  return Object.assign(linkItem, {
    type: linkItem.items && linkItem.items.length ? 'links' : 'link'
  });
}
