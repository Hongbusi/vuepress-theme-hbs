<template>
  <div v-if="$themeConfig.modePicker !== false" :class="['color-picker', { close: showPicker }]">
    <div class="picker-icon" @click="clickPickerIcon">
      <i class="arrow" />
    </div>
    <div class="color-picker-menu">
      <span class="menu-item">dark</span>
      <span class="menu-item">auto</span>
      <span class="menu-item">light</span>
    </div>
  </div>
</template>

<script>
// import ModePicker from './ModePicker';
// import applyMode from './applyMode';

export default {
  name: 'UserSettings',

  // components: {
  //   ModePicker
  // },

  data () {
    return {
      showPicker: true
    }
  },

  // mounted () {
  //   const themeMode = this.$themeConfig.mode || 'auto';
  //   const { modePicker } = this.$themeConfig;
  //   if (modePicker === false) {
  //     if (themeMode === 'auto') {
  //       window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
  //         applyMode(themeMode);
  //       });
  //       window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
  //         applyMode(themeMode);
  //       });
  //     }
  //     applyMode(themeMode);
  //   }
  // },

  methods: {
    clickPickerIcon () {
      this.showPicker = !this.showPicker;
    }
  }
}
</script>

<style lang="stylus">
.color-picker {
  position: fixed;
  bottom: 0;
  left: 4%;
  height: 24px;
  line-height: 24px;
  text-align: center;
  transition: transform .3s cubic-bezier(.645, .045, .355, 1);
  cursor: pointer;

  .picker-icon {
    background: #262626;
    position: absolute;
    top: -12px;
    width: 32px;
    height: 13px;
    margin: auto;
    left: 0;
    right: 0;
    border-radius: 4px 4px 0 0;
    box-shadow: 0 -2px 6px rgb(0 0 0 / 15%);
    cursor: pointer;

    .arrow {
      display: inline-block;
      position: absolute;
      top: 50%;
      left: calc(50% - 2.8px);
      transition: transform .3s cubic-bezier(.645,.045,.355,1);

      &:before,
      &:after {
        content: '';
        display: block;
        position: absolute;
        width: 6px;
        height: 2px;
        background: #fff;
        transition: transform .3s cubic-bezier(.645,.045,.355,1);
      }

      &:before {
        transform: rotate(-45deg) translateX(2px);
      }

      &:after {
        transform: rotate(45deg) translateX(-2px);
      }
    }
  }

  &.close {
    transform: translateY(100%);

    .arrow {
      transform: translateY(-3px);

      &:before {
        transform: rotate(45deg) translateX(2px);
      }

      &:after {
        transform: rotate(-45deg) translateX(-2px);
      }
    }
  }

  .color-picker-menu {
    display: inline-block;
    border-radius: 4px 4px 0 0;
    overflow: hidden;
    background: #262626;

    .menu-item {
      padding: 0 4px;
      cursor: pointer;
      display: inline-block;
      border-right: 1px solid #000;
      color: #ccc;
      height: 24px;
      line-height: 24px;
      font-size: 12px;
    }
  }
}
</style>
