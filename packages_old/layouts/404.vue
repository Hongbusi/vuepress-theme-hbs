<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>

      <blockquote>{{ getMsg() }}</blockquote>

      <RouterLink to="/">
        Take me home.
      </RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
];

export default {
  mounted() {
    this.initNoFoundPageByTencent();
  },

  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    },

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
