<template>
  <div class="page-info">
    <span v-if="pageInfo.frontmatter.author || $themeConfig.author">
      <hbs-icon icon="hbs-author" />
      {{ pageInfo.frontmatter.author || $themeConfig.author }}
    </span>

    <span v-if="pageInfo.frontmatter.date">
      <hbs-icon icon="hbs-date" />
      {{ formatDateValue(pageInfo.frontmatter.date) }}
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
    }
  },

  methods: {
    formatDateValue(value) {
      return new Intl.DateTimeFormat().format(new Date(value));
    }
  }
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page-info
  @extend $wrapper
  padding-top 1rem
  padding-bottom 1rem
  color #909090

  svg
    color #ccc
  span:not(:last-child)
    margin-right 16px
</style>
