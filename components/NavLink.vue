<template>
  <router-link
    v-if="!isExternal(link)"
    class="nav-link"
    :to="link"
  >
    <hbs-icon v-if="item.icon" :icon-class="`${item.icon}`" />
    {{ item.text }}
  </router-link>
  <a
    v-else
    :href="link"
    class="nav-link external"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    <hbs-icon v-if="item.icon" :icon-class="`${item.icon}`" />
    {{ item.text }}
    <OutboundLink />
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '@theme/utils';

export default {
  name: 'NavLink',

  props: {
    item: {
      require: true,
      type: Object,
      default() {
        return {}
      }
    }
  },

  computed: {
    link() {
      return ensureExt(this.item.link);
    }
  },

  methods: {
    isExternal,
    isMailto,
    isTel,
    ensureExt
  }
}
</script>
