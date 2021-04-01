<template>
  <div v-if="$themeConfig.modePicker !== false" class="color-picker">
    <a class="color-button" @click.prevent="showMenu = !showMenu">
      <hbs-icon icon-class="hbs-test" />
    </a>
    <div v-show="showMenu" class="color-picker-menu">
      <ModePicker />
    </div>
  </div>
</template>

<script>
import ModePicker from './ModePicker';
import applyMode from './applyMode';

export default {
  name: 'UserSettings',

  components: {
    ModePicker
  },

  data () {
    return {
      showMenu: false
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
    hideMenu () {
      this.showMenu = false;
    }
  }
}
</script>

<style lang="stylus">
.color-picker {
	position: relative;
	margin-right: 1em;
  cursor: pointer;

	.color-button {
		align-items: center;
		height: 100%;

		.iconfont {
			font-size: 1.4rem;
			color: $accentColor;
		}
	}

	.color-picker-menu {
		position: absolute;
		top: 40px;
		left: 50%;
		z-index: 150;

		ul {
			padding: 0;
			margin: 0;
			list-style-type: none;
		}
	}
}

@media (max-width: $MQMobile) {
	.color-picker {
		margin-right: 1rem;

		.color-picker-menu {
			left: calc(50% - 35px);

			&::before {
				left: calc(50% + 35px);
			}
		}
	}
}
</style>
