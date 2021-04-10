<template>
  <div class="footer">
    <p>
      Copyright ©
      <span v-if="$themeConfig.startYear && $themeConfig.startYear != (new Date().getFullYear())">{{ $themeConfig.startYear }} - </span>
      {{ new Date().getFullYear() }}
      <span v-if="$themeConfig.author">{{ $themeConfig.author }}</span>
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
  </div>
</template>

<script>
export default {
  name: 'Footer'
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
</style>
