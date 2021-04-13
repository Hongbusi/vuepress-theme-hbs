<template>
  <div class="page-info">
    <div class="page-info-avatar">
      <img v-if="pageInfo.frontmatter.avatar || $site.themeConfig.avatar" class="avatar-img" :src="$withBase(pageInfo.frontmatter.avatar || $site.themeConfig.avatar)">
      <svg
        v-else
        t="1618315963729"
        class="avatar-img"
        viewBox="0 0 1060 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3092"
        width="128"
        height="128"
      >
        <path d="M4.71 511.696c0 282.25 228.805 511.054 511.05 511.054 282.249 0 511.053-228.804 511.053-511.054C1026.813 229.452 798.01 0.648 515.76 0.648 233.515 0.648 4.71 229.452 4.71 511.696z m0 0" fill="#DEDFE0" p-id="3093" />
        <path d="M889.749 858.352c-74.51-46.924-191.745-88-203.646-93.96-12.779-6.39-74.524-25.554-76.654-74.526-1.868-42.752 39.364-58.753 76.654-104.347 25.562-49.683 59.625-168.213 25.557-276.81-57.495-132.026-191.65-132.007-191.65-132.007l-4.255 1.692-4.254-1.692s-134.157-0.019-191.642 132.006c-34.078 108.598 0.005 233.517 25.547 276.81 37.305 45.595 78.522 61.596 76.66 104.348-2.13 48.972-63.88 68.136-76.66 74.526-11.896 5.96-129.135 47.031-203.644 93.96-0.294 0.21-0.493 0.42-0.78 0.634 93.328 100.678 226.66 163.764 374.778 163.764 148.055 0 281.333-63.032 374.661-163.627-0.253-0.254-0.419-0.512-0.672-0.77z m0 0" fill="#F5F5F9" p-id="3094" />
      </svg>
    </div>
    <div class="page-info-box">
      <div v-if="pageInfo.frontmatter.author || $themeConfig.author" class="avatar-name">
        {{ pageInfo.frontmatter.author || $themeConfig.author }}
      </div>
      <div class="meta-box">
        <span v-if="pageInfo.frontmatter.date">
          {{ formatDateValue(pageInfo.frontmatter.date) }}
        </span>
        <span>浏览量</span>
        <AccessNumber v-if="showAccessNumber === true" :page-path="pageInfo.path" />
      </div>
    </div>
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
      return new Intl.DateTimeFormat('zh-CN', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        weekday: 'long'
      }).format(new Date(value));
    }
  }
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page-info
  display flex
  align-items center
  @extend $wrapper
  padding-top ($navbarHeight + 3rem) !important
  margin-bottom -4rem !important

  .page-info-avatar
    width 44px
    height 44px
    border-radius 50%

    .avatar-img
      width 100%
      height 100%
      border-radius 50%

  .page-info-box
    margin-left 10px

    .avatar-name
      font-weight 700

    .meta-box
      margin-top 4px
      font-size 14px
      color #909090

      > span:first-child
        margin-right 16px
</style>
