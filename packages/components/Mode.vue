<template>
  <div v-if="$themeConfig.modePicker !== false && false" class="mode-toggle">
    <div :class="['mode-toggle-track', { 'mode-toggle-track--focus': isFocus }]" @click="modeToggle">
      <div :class="['mode-item', 'mode-item--light', { 'mode-item--opacity': currentMode === 'dark' }]">
        <span class="mode-icon">🌞</span>
      </div>
      <div :class="['mode-item', 'mode-item--dark', { 'mode-item--opacity': currentMode === 'light' }]">
        <span class="mode-icon">🌜</span>
      </div>
      <div :class="['mode-thumb', { 'mode-thumb--left': currentMode === 'light' }]" />
    </div>
  </div>
</template>

<script>
import applyMode from '@theme/util/applyMode';

export default {
  name: 'Mode',

  data () {
    return {
      isFocus: false,
      currentMode: 'light',
      timer: null
    }
  },

  mounted () {
    this.currentMode = localStorage.getItem('mode') || this.$themeConfig.mode || 'light';
    this.changeMode();
  },

  methods: {
    modeToggle() {
      this.currentMode = this.currentMode === 'light' ? 'dark' : 'light';
      this.focus();
      this.changeMode();
    },

    focus() {
      clearTimeout(this.timer);
      this.timer = null;
      this.isFocus = true;
      this.timer = setTimeout(() => {
        this.isFocus = false;
      }, 2000);
    },

    changeMode() {
      applyMode(this.currentMode);
      localStorage.setItem('mode', this.currentMode);
    }
  }
}
</script>

<style lang="stylus">
.mode-toggle
  display flex
  align-items center
  margin-right 16px

  .mode-toggle-track
    position relative
    width 50px
    height 24px
    border-radius 30px
    background-color #4d4d4d
    transition .2s
    cursor pointer
    user-select none

    .mode-item
      position absolute
      top 0
      bottom 0
      margin auto 0
      height 10px
      width 10px
      transition opacity .25s

      &.mode-item--light
        left 10px

      &.mode-item--dark
        right 10px

      &.mode-item--opacity
        opacity 0

    .mode-icon
      display flex
      align-items center
      justify-content center
      height 10px
      width 10px

    .mode-thumb
      position absolute
      top 1px
      left 1px
      width 22px
      height 22px
      box-sizing border-box
      border 1px solid #4d4d4d
      border-radius 50%
      background-color #fafafa
      transition .25s

      &.mode-thumb--left
        left 27px

  .mode-toggle-track--focus .mode-thumb
    box-shadow 0 0 2px 3px $accentColor
</style>
