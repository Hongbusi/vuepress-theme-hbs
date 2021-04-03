<template>
  <nav v-if="userLinks.length || repoLink" class="nav-links">
    <!-- user links -->
    <div
      v-for="item in userLinks"
      :key="item.link"
      class="nav-item"
    >
      <DropdownLink v-if="item.type === 'links'" :item="item" />
      <NavLink v-else :item="item" />
    </div>

    <!-- repo link -->
    <a
      v-if="repoLink"
      :href="repoLink"
      class="repo-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <reco-icon :icon="`reco-${repoLabel.toLowerCase()}`" />
      {{ repoLabel }}
      <OutboundLink />
    </a>
  </nav>
</template>

<script>
import { resolveNavLinkItem } from '@theme/utils';
import NavLink from '@theme/components/NavLink';
import DropdownLink from '@theme/components/DropdownLink';

export default {
  name: 'NavLinks',

  components: {
    NavLink,
    DropdownLink
  },

  computed: {
    userLinks() {
      return (this.$themeConfig.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        });
      });
    },

    repoLink() {
      const { repo } = this.$themeConfig;

      if (repo) {
        return /^https?:/.test(repo) ? repo : `https://github.com/${repo}`;
      }

      return ''
    }
  }
}
</script>

<style lang="stylus">
.nav-links
  display inline-block
  a
    line-height 1.4rem
    color var(--text-color)
    &:hover, &.router-link-active
      color $accentColor
      .iconfont
        color $accentColor
  .nav-item
    position relative
    display inline-block
    margin-left 1.5rem
    line-height 2rem
    &:first-child
      margin-left 0
  .repo-link
    margin-left 1.5rem

@media (max-width: $MQMobile)
  .nav-links
    .nav-item, .repo-link
      margin-left 0

@media (min-width: $MQMobile)
  .nav-item > a:not(.external)
    &:hover, &.router-link-active
      margin-bottom -2px
</style>
