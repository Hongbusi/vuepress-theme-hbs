<template>
  <main class="page">
    <slot name="top" />

    <PageInfo :page-info="$page" :show-access-number="showAccessNumber" />

    <Content class="theme-default-content" />

    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />

    <Comments :is-show-comments="isShowComments" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import PageInfo from '@theme/components/PageInfo.vue';
import Comments from '@theme/components/Comments.vue';

export default {
  name: 'Page',

  components: {
    PageEdit,
    PageNav,
    PageInfo,
    Comments
  },

  props: ['sidebarItems'],

  computed: {
    isShowComments() {
      const { isShowComments } = this.$frontmatter;
      return isShowComments === true;
    },

    showAccessNumber() {
      const { valineConfig } = this.$themeConfig;

      return valineConfig && valineConfig.visitor != false;
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
</style>
