<template>
  <header class="navbar">
    <!-- <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/> -->
    <router-link
      :to="$localePath"
      class="home-link"
    >
      <img
        v-if="$themeConfig.logo"
        class="logo"
        :src="$withBase($themeConfig.logo)"
        :alt="$siteTitle"
      >
      <span v-if="$siteTitle" ref="siteName" class="site-name">{{ $siteTitle }}</span>
    </router-link>

    <div class="links">
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import NavLinks from '@theme/components/NavLinks';

export default {
  name: 'Navbar',

  components: {
    NavLinks
  }
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem;
$navbar-horizontal-padding = 1.5rem;

.navbar {
  padding: $navbar-vertical-padding $navbar-horizontal-padding;
  line-height: $navbarHeight - 1.4rem;
  box-shadow: var(--box-shadow);
  background: var(--background-color);

  a, span, img {
    display: inline-block;
  }

  .logo {
    height: $navbarHeight - 1.4rem;
    min-width: $navbarHeight - 1.4rem;
    margin-right: 0.8rem;
    vertical-align: top;
    border-radius: 50%;
  }

  .site-name {
    position: relative;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-color);
  }

  .links {
    position: absolute;
    right: $navbar-horizontal-padding;
    top: $navbar-vertical-padding;
    display: flex;
    padding-left: 1.5rem;
    box-sizing: border-box;
    white-space: nowrap;
    font-size: 0.9rem;
    background-color: var(--background-color);
  }

    .search-box {
      flex: 0 0 auto;
      vertical-align: top;
    }

}

@media (max-width: $MQMobile) {
  .navbar {
    padding-left: 4rem;

    .can-hide {
      display: none;
    }

    .links {
      padding-left: .2rem;
    }
  }
}
</style>
