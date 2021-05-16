<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />

    <PageInfo :page-info="$page" />

    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import PageInfo from '@theme/components/PageInfo.vue';

export default {
  name: 'Page',

  components: {
    PageEdit,
    PageNav,
    PageInfo
  },

  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
</style>
