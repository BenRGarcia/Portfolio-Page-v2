<template>
  <p>Portfolio Test</p>
</template>

<script>
export default {
  mounted: function () {
    this.$store.dispatch('collapseNavbar')
  }
}
</script>

<style lang="scss" scoped>

</style>
