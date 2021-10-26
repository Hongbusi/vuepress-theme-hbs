<template>
  <Common>
    <template #body>
      <div class="bg-green-400 w-full h-80" style="margin-top: -64px;"></div>
      <div class="container">
        git stars
      </div>
    </template>
  </Common>
</template>

<script>
import { defineComponent } from 'vue';
import Common from '../components/Common.vue';

export default defineComponent({
  name: 'GitStars',

  components: { Common }
});
</script>
