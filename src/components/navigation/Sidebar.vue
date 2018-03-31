<template>
  <nav :class="sidebarClasses">
    <!-- Logo -->
    <Logo/>
    <ul :class="ulClasses">
      <!-- Sidebar links -->
      <SidebarLinks
        v-for="(link, id) in sidebarLinks"
        :key="id + '-internal'"
        :link="link"
        :css="css"
      />
    </ul>
  </nav>
</template>

<script>
import Logo from '../logo/Logo'
import SidebarLinks from './SidebarLinks'

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
      // CSS object passed to children
      css: {
        // CSS Classes
        class: {
          li: [
            'nav-item',
            'd-flex',
            'w-100',
            'border-bottom',
            'pl-1'
          ],
          a: [
            'w-100',
            'sidebar-link'
          ],
          span: [
            'nav-link',
            'd-inline-block',
            'py-3',
            'pl-1',
            'pr-0'
          ]
        },
        // CSS Styles
        style: {
          a: {
            color: 'initial',
            lineHeight: '1.0',
            fontSize: '1.1rem',
            textDecoration: 'none'
          }
        }
      }
    }
  },
  components: {
    Logo,
    SidebarLinks
  },
  computed: {
    sidebarLinks () {
      return this.$store.getters['navigation/getNavigationLinks']
    }
  }
}
</script>

<style lang="scss" scoped>
/* Make Sidebar Nav sticky */
nav {
  z-index: 2;
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
