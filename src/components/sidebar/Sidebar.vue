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
      />
    </ul>
    <GitHub class="w-75 mx-auto mb-3"/>
  </nav>
</template>

<script>
import SidebarItem from './SidebarItem'
import GitHub from '../social/GitHub'
import Logo from '../logo/Logo'

export default {
  data () {
    return {
      sidebarClasses: [
        'bg-light', 'pl-0', 'pr-0', 'd-none', 'd-md-flex', 'flex-column'
      ],
      ulClasses: [
        'nav', 'nav-pills', 'mb-auto', 'flex-column', 'flex-nowrap'
      ]
    }
  },
  components: {
    SidebarItem,
    GitHub,
    Logo
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
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),
              0 2px 10px 0 rgba(0,0,0,0.12);
}
</style>
