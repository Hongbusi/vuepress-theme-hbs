import { addScriptToHead } from '@theme/utils';

export default ({
  // Vue,
  // options,
  // router,
  // siteData,
  isServer
}) => {
  if (!isServer) {
    addScriptToHead('//at.alicdn.com/t/font_2389959_bhhlyhnpxpt.js');
  }
}
