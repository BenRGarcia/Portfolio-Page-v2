<template>
  <!-- Navbar wrapper -->
  <nav
    :class="css.class.nav"
  >
    <!-- Navbar toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
      :aria-controls="id.dropdown"
      :data-target="'#' + id.dropdown"
    >
      <!-- Navbar toggle icon -->
      <span
        :class="css.class.toggleIcon"
      >
      </span>
    </button>
    <!-- Navbar Title -->
    <router-link
      to="{ name: 'Home'}"
      id="navbarTitle"
      :class="css.class.navbarTitle"
    >
      Benjamin Garcia<br>
      <span>Full Stack Developer</span>
    </router-link>
    <!-- Navbar dropdown wrapper -->
    <div
      :class="css.class.dropdown"
      :id="id.dropdown"
    >
      <ul class="navbar-nav">
        <!-- Navbar Items -->
        <NavbarLink
          v-for="(link, index) in navbarItems"
          :key="index"
          :link="link"
        />
      </ul>
    </div>
  </nav>
</template>

<script>
import NavbarLink from './NavbarLink'

export default {
  data () {
    return {
      id: {
        dropdown: 'navbarNavDropdown'
      },
      css: {
        class: {
          nav: [
            'navbar',
            'navbar-expand-lg',
            'navbar-dark',
            'pl-1'
          ],
          navbarTitle: [
            'mx-auto',
            'py-1',
            'text-center'
          ],
          dropdown: [
            'collapse',
            'navbar-collapse'
          ],
          toggleIcon: [
            'navbar-toggler-icon'
          ]
        }
      }
    }
  },
  components: {
    NavbarLink
  },
  computed: {
    navbarItems () {
      return this.$store.getters['navigation/getNavigationLinksInternal']
    }
  }
}
</script>

<style lang="scss" scoped>
#navbarTitle {
  color: #fff;
  font-size: 1.1rem;
}
#navbarTitle:hover {
  text-decoration: none;
}
</style>
