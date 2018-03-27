<template>
  <div>
    <PortfolioProject
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
    />
  </div>
</template>

<script>
import PortfolioProject from './portfolio/PortfolioProject'

export default {
  data () {
    return {
      css: {

      }
    }
  },
  components: {
    PortfolioProject
  },
  computed: {
    projects () {
      return this.$store.getters['portfolio/getProjects']
    }
  },
  mounted: function () {
    return this.$store.dispatch('collapseNavbar')
  }
}
</script>

<style lang="scss" scoped>

</style>
