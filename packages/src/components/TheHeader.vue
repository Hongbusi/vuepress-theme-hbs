<template>
  <header class="bg-transparent" :class="visible ? 'fixed top-0 left-0 w-full bg-red-500' : 'relative'" style="height: 64px;">
    <nav class="container mx-auto h-full flex justify-between items-center text-white">
      <div class="cursor-pointer">Logo</div>
      <ul class="flex h-full">
        <li v-for="(item, index) in 4" :key="index" class="px-4 h-full hover:bg-gray-500 hover:bg-opacity-20 transition-colors">
          <a href="/" class="flex items-center h-full">
            <span>首页</span>
          </a>
        </li>
      </ul>
    </nav>

    <git-link v-show="visible" />
  </header>
</template>

<script setup>
import GitLink from './GitLink.vue';
import { ref, onMounted, onUnmounted } from 'vue';

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
</script>
