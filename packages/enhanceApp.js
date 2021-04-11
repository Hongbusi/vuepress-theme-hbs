import { addScriptToHead } from '@theme/util/theme';

export default ({
  // Vue,
  // options,
  // router,
  // siteData,
  isServer
}) => {
  if (!isServer) {
    addScriptToHead('//at.alicdn.com/t/font_2389959_nqj69vw88qm.js');
  }
}
