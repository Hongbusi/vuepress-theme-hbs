<template>
  <div v-if="isShowComments" class="comments-wrapper">
    <div id="valine" />
  </div>
</template>

<script>
import Valine from 'valine';

export default {
  name: 'Comoments',

  props: {
    isShowComments: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    options () {
      const { valineConfig } = this.$themeConfig;

      return valineConfig !== undefined ? valineConfig : null;
    }
  },

  watch: {
    '$route' (to, from) {
      // 切换页面时刷新评论
      if (to.path !== from.path) {
        setTimeout(() => {
          this.initValine()
        }, 300);
      }
    }
  },

  mounted() {
    this.initValine()
  },

  methods: {
    initValine () {
      const valineOptions = {
        el: '#valine',
        placeholder: '欢迎大家在此留下你的建议和意见！',
        avatar: 'Gravatar',
        meta: ['nick', 'mail'],
        visitor: true,
        recordIP: false,
        requiredFields: ['nick', 'mail'],
        ...this.options
      };

      new Valine(valineOptions);
    }
  }
}
</script>
<style lang="stylus">
.comments-wrapper
  max-width 740px
  margin 0 auto
  padding 2rem 2.5rem
</style>
