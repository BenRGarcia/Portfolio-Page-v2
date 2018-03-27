<template>
  <nav class="navbar navbar-expand-lg navbar-dark pl-1">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a id="logo" class="mx-auto py-1 text-center" href="https://benrgarcia.github.io/Portfolio-Page-v2/">
      Benjamin Garcia<br>
      <span>Full Stack Developer</span>
    </a>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <!-- Navbar Items -->
        <NavbarItem
          v-for="(item, index) in navbarItems"
          :key="index"
          :name="item.name"
          :href="item.href"
        />
      </ul>
    </div>
  </nav>
</template>

<script>
import NavbarItem from './NavbarItem'

export default {
  components: {
    NavbarItem
  },
  computed: {
    navbarItems () {
      return this.$store.getters.getNavigationLinksInternal
    }
  }
}
</script>

<style lang="scss" scoped>
#logo {
  color: #fff;
  font-size: 1.1rem;
}
#logo:hover {
  text-decoration: none;
}
</style>
