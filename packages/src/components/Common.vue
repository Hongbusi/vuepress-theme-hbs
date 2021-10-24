<template>
  <the-header />

  <slot name="body" />

  <the-footer />
</template>

<script setup>
import TheHeader from './TheHeader.vue';
import TheFooter from './TheFooter.vue';
</script>
