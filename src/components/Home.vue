<template>
  <div>
    <Jumbotron/>
  </div>
</template>

<script>
import Jumbotron from './jumbotron/Jumbotron'

export default {
  components: {
    Jumbotron
  },
  mounted: function () {
    return this.$store.dispatch('collapseNavbar')
  }
}
</script>

<style lang="scss" scoped>

</style>
