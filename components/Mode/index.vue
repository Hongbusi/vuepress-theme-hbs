<template>
  <ul v-if="$themeConfig.modePicker !== false" :class="['color-picker-menu', { close: showPicker }]">
    <li class="menu-item picker-icon" @click="clickPickerIcon">
      <i class="arrow" />
    </li>
    <li
      v-for="(mode, index) in modeOptions"
      :key="index"
      class="menu-item"
      @click="clickChangeMode(mode.mode)"
    >
      <hbs-icon :icon-class="`hbs-${mode.mode}`" :class="getClass(mode.mode)" />
    </li>
  </ul>
</template>

<script>
import applyMode from './applyMode';

export default {
  name: 'UserSettings',

  data () {
    return {
      showPicker: true,
      modeOptions: [
        { mode: 'light', title: 'light' },
        { mode: 'auto', title: 'auto' },
        { mode: 'dark', title: 'dark' }
      ],
      currentMode: 'auto'
    }
  },

  mounted () {
    const themeMode = localStorage.getItem('mode') || this.$themeConfig.mode || 'auto';
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
    } else {
      let that = this;
      window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
        that.$data.currentMode === 'auto' && applyMode(that.$data.currentMode);
      });
      window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
        that.$data.currentMode === 'auto' && applyMode(that.$data.currentMode);
      });
    }
    this.currentMode = themeMode;
    applyMode(themeMode);
    localStorage.setItem('mode', themeMode);
  },

  methods: {
    clickPickerIcon () {
      this.showPicker = !this.showPicker;
    },

    clickChangeMode(mode) {
      if (mode === this.currentMode) return;

      this.currentMode = mode;
      applyMode(mode);
      localStorage.setItem('mode', mode);
    },

    getClass(mode) {
      return mode === this.currentMode ? 'active' : '';
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
  margin: 0;
  padding-left: 0;
  cursor: pointer;
  transition: transform .3s cubic-bezier(.645, .045, .355, 1);

  .menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background-color: $accentColor;

    svg {
      color: #fff;
    }

    svg.active {
      color: #000;
    }

    .arrow {
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateX(2px);
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
        transform: rotate(-135deg) translateX(2px);
      }

      &:after {
        transform: rotate(-45deg) translateX(-2px);
      }
    }
  }

  .picker-icon {
    border-radius: 2px 0 0 2px;
  }

  &.close {
    transform: translateX(60px);

    .arrow {
      transform: translateX(-1px);

      &:before {
        transform: rotate(-45deg) translateX(2px);
      }

      &:after {
        transform: rotate(-135deg) translateX(-2px);
      }
    }
  }
}
</style>
