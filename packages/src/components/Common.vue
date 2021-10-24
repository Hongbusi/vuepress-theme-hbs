<template>
  <the-header />

  <div class="container">
    <slot name="body" />
  </div>

  <the-footer />
</template>

<script setup>
import TheHeader from './TheHeader.vue';
import TheFooter from './TheFooter.vue';
</script>
