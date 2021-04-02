<template>
  <Common>
    container
    <Footer v-if="$frontmatter.home" />
  </Common>
</template>

<script>
import Common from '@theme/components/Common';
import Footer from '@theme/components/Footer';

export default {
  name: 'Layout',

  components: {
    Common,
    Footer
  }
}
</script>
