<template>
  <main class="page">
    <ModuleTransition>
      <slot name="top" />
    </ModuleTransition>

    <ModuleTransition delay="0.08">
      <Content v-if="hbsShowModule" class="theme-default-content" />
    </ModuleTransition>

    <ModuleTransition delay="0.16">
      <PageInfo v-if="hbsShowModule" :page-info="$page" />
    </ModuleTransition>

    <ModuleTransition delay="0.24">
      <PageEdit v-if="hbsShowModule" />
    </ModuleTransition>

    <ModuleTransition delay="0.32">
      <PageNav v-if="hbsShowModule" v-bind="{ sidebarItems }" />
    </ModuleTransition>

    <ModuleTransition delay="0.40">
      <slot v-if="hbsShowModule" name="bottom" />
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

  props: ['sidebarItems', 'hbsShowModule']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
</style>
