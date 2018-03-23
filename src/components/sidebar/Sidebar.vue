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
  </nav>
</template>

<script>
import SidebarItem from './SidebarItem'

export default {
  data () {
    return {
      sidebarClasses: [
        'col-3', 'bg-light', 'pl-0', 'pr-0'
      ],
      ulClasses: [
        'nav', 'nav-pills', 'flex-column'
      ]
    }
  },
  components: {
    SidebarItem
  },
  computed: {
    sidebarLinks () {
      return this.$store.getters.getSidebarLinks
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
}
</style>
