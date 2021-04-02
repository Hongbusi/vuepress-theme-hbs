<template>
  <div v-if="$themeConfig.modePicker !== false" :class="['color-picker-menu', { close: showPicker }]">
    <span class="picker-icon" @click="clickPickerIcon">
      <i class="arrow" />
    </span>
    <hbs-icon icon-class="hbs-dark" class="menu-item" />
    <hbs-icon icon-class="hbs-arrow" class="menu-item" />
    <hbs-icon icon-class="hbs-light" class="menu-item" />
  </div>
</template>

<script>
// import ModePicker from './ModePicker';
import applyMode from './applyMode';

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

  mounted () {
    const themeMode = this.$themeConfig.mode || 'auto';
    const { modePicker } = this.$themeConfig;
    if (modePicker === false) {
      if (themeMode === 'auto') {
        window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
          applyMode(themeMode);
        });
        window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
          applyMode(themeMode);
        });
      }
      applyMode(themeMode);
    }
  },

  methods: {
    clickPickerIcon () {
      this.showPicker = !this.showPicker;
    }
  }
}
</script>

<style lang="stylus">
.color-picker-menu {
  position: fixed;
  right: 0;
  bottom: 50%;
  display: flex;
  transition: transform .3s cubic-bezier(.645, .045, .355, 1);
  cursor: pointer;

  .arrow {
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background: green;

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
      transform: rotate(0) translateX(0);
    }

    &:after {
      transform: rotate(0) translateX(0);
    }
  }

  .menu-item {
    font-size: 20px;
    // width: 20px
    // height: 20px;
  }

  &.close {
    transform: translateY(100%);

    .arrow {
      transform: translateY(-3px);

      &:before {
        transform: rotate(-45deg) translateX(2px);
      }

      &:after {
        transform: rotate(-135deg) translateX(-2px);
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
