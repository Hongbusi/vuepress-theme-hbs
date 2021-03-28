<template>
  <div class="theme-layout">
    <header>
      <SearchBox />
    </header>
    <main>
      <Content />
    </main>
  </div>
</template>

<script>
import SearchBox from '@SearchBox';

export default {
  components: { SearchBox }
}
</script>
