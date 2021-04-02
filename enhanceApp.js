import { addScriptToHead } from '@theme/utils';

export default ({
  // Vue,
  // options,
  // router,
  // siteData,
  isServer
}) => {
  if (!isServer) {
    addScriptToHead('//at.alicdn.com/t/font_2389959_3p13bz4u4em.js');
  }
}
