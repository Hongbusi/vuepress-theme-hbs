<template>
  <div class="theme-layout">
    <header>
      <SearchBox />
    </header>
    <main>
      <Content />
    </main>
    <Footer v-if="$frontmatter.home" />
  </div>
</template>

<script>
import SearchBox from '@SearchBox';
import Footer from '@theme/components/Footer';

export default {
  components: { SearchBox, Footer }
}
</script>
