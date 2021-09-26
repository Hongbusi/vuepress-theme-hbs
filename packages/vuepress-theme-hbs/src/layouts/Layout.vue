<template>
  <Layout>
    <template #navbar>
      <header class="navbar">This is my custom navbar.</header>
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default {
  components: {
    Layout
  }
}
</script>
