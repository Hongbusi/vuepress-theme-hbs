<template>
  <div class="theme-container">
    <div>
      <Navbar />
    </div>
    <slot />
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar'

export default {
  name: 'Common',
  components: {
    Navbar
  }
}
</script>
