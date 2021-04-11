<template>
  <div class="page-info">
    <span v-if="pageInfo.frontmatter.author || $themeConfig.author">
      <hbs-icon icon="hbs-author" />
      {{ pageInfo.frontmatter.author || $themeConfig.author }}
    </span>

    <span v-if="pageInfo.frontmatter.date">
      <hbs-icon icon="hbs-time" />
      {{ formatDateValue(pageInfo.frontmatter.date) }}
    </span>

    <span v-if="showAccessNumber === true">
      <hbs-icon icon="hbs-eye" />
      9999
      <!-- <AccessNumber :idVal="pageInfo.path" :numStyle="numStyle" /> -->
    </span>
  </div>
</template>

<script>
export default {
  name: 'PageInfo',

  props: {
    pageInfo: {
      type: Object,
      default () {
        return {}
      }
    },

    showAccessNumber: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    formatDateValue(value) {
      return new Intl.DateTimeFormat().format(new Date(value))
    }
  }
};
</script>

<style lang="stylus" scoped>
.page-info
  span:not(:last-child)
    margin-right 1rem
</style>
