<template>
  <Common>
    <Mode />
    container
    <Footer v-if="$frontmatter.home" />
  </Common>
</template>

<script>
import Common from '@theme/components/Common';
import Footer from '@theme/components/Footer';
import Mode from '@theme/components/Mode';

export default {
  name: 'Layout',

  components: {
    Common,
    Footer,
    Mode
  }
}
</script>
