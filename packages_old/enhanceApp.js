import { addScriptToHead } from '@theme/util';

export default ({
  // Vue,
  // siteData,
  isServer,
  // router
}) => {
  if (!isServer) {
    addScriptToHead('//at.alicdn.com/t/font_2389959_bl3cqi5ojk4.js');
  }
}
