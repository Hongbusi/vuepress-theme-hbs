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
