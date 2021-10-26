<template>
  <the-header />

  <slot name="body" />

  <the-footer />
</template>

<script>
import { defineComponent } from 'vue';

import TheHeader from './TheHeader.vue';
import TheFooter from './TheFooter.vue';

export default defineComponent({
  name: 'Common',

  components: { TheHeader, TheFooter }
});
</script>
