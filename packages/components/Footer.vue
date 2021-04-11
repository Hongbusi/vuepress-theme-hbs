<template>
  <div class="footer">
    <p>
      Copyright ©
      <span v-if="$themeConfig.startYear && $themeConfig.startYear != (new Date().getFullYear())">{{ $themeConfig.startYear }} - </span>
      {{ new Date().getFullYear() }}
      <span v-if="$themeConfig.author">{{ $themeConfig.author }}</span>
      <span v-show="showAccessNumber" class="footer-access-number">
        <hbs-icon icon="hbs-eye" />
        <AccessNumber page-path="/" />
      </span>
    </p>
    <p v-if="$themeConfig.record">
      <a
        :href="$themeConfig.recordLink || '#'"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ $themeConfig.record }}
      </a>
    </p>

    <Comments :is-show-comments="false" />
  </div>
</template>

<script>
import AccessNumber from '@theme/components/AccessNumber.vue';
import Comments from '@theme/components/Comments.vue';

export default {
  name: 'Footer',

  components: {
    AccessNumber,
    Comments
  },

  computed: {
     showAccessNumber() {
      const { valineConfig } = this.$themeConfig;

      return valineConfig && valineConfig.visitor != false;
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer
  padding 1.5rem 2.5rem
  border-top 1px solid $borderColor
  text-align center
  color lighten($textColor, 25%);

  a
    font-weight normal
    font-size 14px
    color lighten($textColor, 25%)

    &:hover
      color $accentColor
      text-decoration underline

  > span
    margin-left 1rem

.footer-access-number
  margin-left 1rem
  color #999
</style>
