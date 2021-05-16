<template>
  <main class="page">
    <ModuleTransition>
      <slot name="top" />
    </ModuleTransition>

    <ModuleTransition delay="0.08">
      <Content class="theme-default-content" />
    </ModuleTransition>

    <ModuleTransition delay="0.16">
      <PageInfo :page-info="$page" />
    </ModuleTransition>

    <ModuleTransition delay="0.24">
      <PageEdit />
    </ModuleTransition>

    <ModuleTransition delay="0.32">
      <PageNav v-bind="{ sidebarItems }" />
    </ModuleTransition>

    <ModuleTransition delay="0.40">
      <slot name="bottom" />
    </ModuleTransition>
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
