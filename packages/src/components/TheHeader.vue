<template>
  <header class="bg-transparent" :class="visible ? 'fixed top-0 left-0 w-full bg-red-500' : 'relative'" style="height: 64px;">
    <nav class="container mx-auto h-full flex justify-between items-center text-white">
      <div class="cursor-pointer">Hongbusi</div>
      <ul class="flex h-full">
        <li v-for="(item, index) in 4" :key="index">
          <a href="/" class="flex items-center px-4 h-full hover:bg-gray-500 hover:bg-opacity-20 transition-color">
            <span>首页</span>
          </a>
        </li>
      </ul>
    </nav>

    <git-link v-show="visible" />
  </header>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
// import { useThemeLocaleData } from '@vuepress/plugin-theme-data/lib/client';

import GitLink from './GitLink.vue';

export default defineComponent({
  name: 'TheHeader',

  components: { GitLink },

  setup() {
    // const themeLocaleData = useThemeLocaleData();

    // console.log(themeLocaleData);

    const visibilityHeight = 100;
    const visible = ref(false);

    function getScrollTop() {
      const scrollTop = document.documentElement.scrollTop;
      visible.value = scrollTop >= visibilityHeight;
    }

    onMounted(() => {
      getScrollTop();
      window.addEventListener('scroll', getScrollTop);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', getScrollTop);
    });

    return {
      visible
    }
  }
});
</script>
