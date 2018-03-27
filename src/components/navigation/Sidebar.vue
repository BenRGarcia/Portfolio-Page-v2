<template>
  <nav :class="sidebarClasses">
    <!-- Logo -->
    <Logo/>
    <ul :class="ulClasses">
      <!-- Sidebar links -->
      <SidebarItem
        v-for="(link, id) in sidebarLinks"
        :key="id"
        :href="link.href"
        :name="link.name"
        :icon="link.icon"
        :liClasses="liClasses"
        :sidebarItemsClasses="sidebarItemsClasses"
        :sidebarItemsStyles="sidebarItemsStyles"
      />
      <!-- Sidebar Social links -->
      <SidebarItemSocial
        v-for="(link, id) in sidebarLinksSocial"
        :key="id + '-social'"
        :href="link.href"
        :name="link.name"
        :icon="link.icon"
        :liClasses="liClasses"
        :sidebarItemsClasses="sidebarItemsClasses"
        :sidebarItemsStyles="sidebarItemsStyles"
      />
    </ul>
  </nav>
</template>

<script>
import SidebarItem from './SidebarItem'
import Logo from '../logo/Logo'
import SidebarItemSocial from './SidebarItemSocial'

export default {
  data () {
    return {
      sidebarClasses: [
        'bg-light',
        'pl-0',
        'pr-0',
        'd-none',
        'd-md-flex',
        'flex-column'
      ],
      ulClasses: [
        'nav',
        'nav-pills',
        'flex-column',
        'flex-nowrap'
      ],
      liClasses: [
        'nav-item',
        'd-flex',
        'w-100',
        'border-bottom',
        'pl-1'
      ],
      gitHubClasses: [
        'mx-auto',
        'mt-4'
      ],
      sidebarItemsClasses: {
        a: [
          'w-100',
          'sidebar-link'
        ],
        span: [
          'nav-link',
          'd-inline-block',
          'py-3',
          'pr-0'
        ]
      },
      sidebarItemsStyles: {
        color: 'initial',
        lineHeight: '1.0',
        fontSize: '1.2rem',
        textDecoration: 'none'
      }
    }
  },
  components: {
    Logo,
    SidebarItem,
    SidebarItemSocial
  },
  computed: {
    sidebarLinks () {
      return this.$store.getters.getNavigationLinks
    },
    sidebarLinksSocial () {
      return this.$store.getters.getNavigationLinksSocial
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
  box-shadow: 1px 0  5px 0 rgba(0,0,0,0.16),
              1px 0 10px 0 rgba(0,0,0,0.12);
}
/* Give first nav link in list a top border */
ul:first-of-type {
  border-top: 1px solid #dee2e6;
}
</style>
