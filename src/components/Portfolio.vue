<template>
  <div class="row">
    <PortfolioProject
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
      :class="css.class.project"
    />
  </div>
</template>

<script>
import PortfolioProject from './portfolio/PortfolioProject'

export default {
  data () {
    return {
      css: {
        class: {
          project: [
            'col-12',
            'col-lg-6',
            'col-xl-4'
          ]
        }
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
