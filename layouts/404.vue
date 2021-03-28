<template>
  <div />
</template>

<script>
export default {
  mounted() {
    this.initNoFoundPageByTencent();
  },
  methods: {
    initNoFoundPageByTencent() {
      const dom = document.createElement('script');
      dom.setAttribute('homePageName', '回到首页');
      dom.setAttribute('homePageUrl', '/');
      dom.setAttribute('src', '//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js');

      document.body.append(dom);
    }
  }
}
</script>
