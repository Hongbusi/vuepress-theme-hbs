<template>
  <span :id="getIdValue" class="leancloud-visitors" :data-flag-title="flagTitle">
    <span class="leancloud-visitors-count" />
  </span>
</template>

<script>
export default {
  name: 'AccessNumber',

  props: {
    pagePath: String,

    flagTitle: {
      type: String,
      default: 'Your Article Title'
    }
  },

  computed: {
    getIdValue() {
      const base = this.$site.base;
      return base.slice(0, base.length - 1) + this.pagePath;
    }
  }
}
</script>
