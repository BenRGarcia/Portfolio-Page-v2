<template>
  <div>
    <div
      class="row"
    >
      <div class="col-12 px-0">
        <div
          :style="cssChildBanner"
          :class="hideOnSmall"
        >
          <h1
            class="mb-0"
          >
            Portfolio
          </h1>
        </div>
      </div>
    </div>
      <!-- Portfolio Project Section -->
      <div
        class="container"
      >
        <div
          class="row"
        >
        <!-- Projects Append Here -->
        <PortfolioProject
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
          :class="css.class.grid"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioProject from './portfolio/PortfolioProject'

export default {
  props: [
    'cssChildBanner',
    'hideOnSmall'
  ],
  data () {
    return {
      css: {
        class: {
          grid: [
            'col-12',
            'col-md-6',
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
