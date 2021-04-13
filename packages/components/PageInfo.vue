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

    <span v-if="showAccessNumber === true">
      <hbs-icon icon="hbs-eye" />
      <AccessNumber :page-path="pageInfo.path" />
    </span>
  </div>
</template>

<script>
import AccessNumber from '@theme/components/AccessNumber.vue';

export default {
  name: 'PageInfo',

  components: {
    AccessNumber
  },

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

  span:not(:last-child)
    margin-right 16px
</style>
