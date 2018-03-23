<template>
  <nav :class="sidebarClasses">
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
    <GitHub id="contain-github" class="w-50 mx-auto"/>
  </nav>
</template>

<script>
import SidebarItem from './SidebarItem'
import GitHub from '../social/GitHub'

export default {
  data () {
    return {
      sidebarClasses: [
        'bg-light', 'pl-0', 'pr-0', 'd-flex', 'flex-column'
      ],
      ulClasses: [
        'nav', 'nav-pills', 'mb-auto', 'flex-column', 'flex-nowrap'
      ]
    }
  },
  components: {
    SidebarItem,
    GitHub
  },
  computed: {
    sidebarLinks () {
      return this.$store.getters.getSidebarLinks
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
}
</style>
