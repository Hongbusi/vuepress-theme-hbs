<template>
  <Common>
    <template #body>
      <div class="bg-green-400 w-full h-80" style="margin-top: -64px;"></div>
      <Content />
      <div style="height: 2000px; width: 100%;"></div>
    </template>
  </Common>
</template>

<script>
import { defineComponent } from 'vue';
import Common from '../components/Common.vue';

export default defineComponent({
  name: 'Layout',

  components: { Common }
});
</script>
