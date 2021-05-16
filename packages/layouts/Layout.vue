<template>
  <Common>
    <component :is="homeType" v-if="$page.frontmatter.home" />

    <Footer v-if="$frontmatter.home" />

    <Page
      v-else
      :sidebar-items="sidebarItems"
    >
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </Page>
  </Common>
</template>

<script>
import Home from '@theme/components/Home.vue'
import HomeBlog from '@theme/components/HomeBlog.vue'
import Page from '@theme/components/Page.vue'
import Footer from '@theme/components/Footer.vue';
import Common from '../components/common.vue';
import { resolveSidebarItems } from '../util'

export default {
  name: 'Layout',

  components: {
    Home,
    HomeBlog,
    Page,
    Footer,
    Common
  },

  computed: {
    homeType() {
      const { type } = this.$themeConfig || {};
      if (type !== undefined) {
        return type == 'blog' ? 'HomeBlog' : 'Home';
      }
      return 'Home';
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
  }
}
</script>
