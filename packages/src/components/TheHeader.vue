<template>
  <header class="header relative bg-red-50">
    <nav class="container mx-auto h-full flex justify-between items-center">
      <div>Logo</div>
      <ul class="flex">
        <li class="mx-3.5">首页</li>
        <li class="mx-3.5">博客</li>
        <li class="mx-3.5">笔记</li>
        <li class="mx-3.5">每日阅读</li>
      </ul>
    </nav>

    <git-link />
  </header>
</template>

<script setup>
import GitLink from './GitLink.vue';
</script>

<style>
.header {
  height: 64px;
}
</style>
