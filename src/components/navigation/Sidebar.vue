<template>
  <nav :class="sidebarClasses">
    <Logo/>
    <ul :class="ulClasses">
      <!-- Sidebar links -->
      <SidebarItem
        v-for="(link, index) in sidebarLinks"
        :key="index"
        :href="link.href"
        :name="link.name"
        :icon="link.icon"
        :liClasses="liClasses"
      />
      <li>
        <GitHub :class="gitHubClasses"/>
      </li>
    </ul>
  </nav>
</template>

<script>
import SidebarItem from './SidebarItem'
import Logo from '../logo/Logo'
import GitHub from '../social/GitHub'

export default {
  data () {
    return {
      sidebarClasses: [
        'bg-light', 'pl-0', 'pr-0', 'd-none', 'd-md-flex', 'flex-column'
      ],
      ulClasses: [
        'nav', 'nav-pills', 'flex-column', 'flex-nowrap'
      ],
      liClasses: [
        'nav-item', 'd-flex', 'border', 'w-100'
      ],
      gitHubClasses: [
        'mx-auto', 'mt-4'
      ]
    }
  },
  components: {
    SidebarItem,
    Logo,
    GitHub
  },
  computed: {
    sidebarLinks () {
      return this.$store.getters.getNavigationLinks
    }
  }
}
</script>

<style lang="scss" scoped>
/* Make Sidebar Nav sticky */
nav {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  box-shadow: 1px 0 5px 0 rgba(0,0,0,0.16),
              1px 0 10px 0 rgba(0,0,0,0.12);
}
</style>
