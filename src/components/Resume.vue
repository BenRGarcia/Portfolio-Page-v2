<template>
  <p>Resume Test</p>
</template>

<script>
export default {
  mounted: function () {
    console.log(`Home page mounted`)
    this.$store.dispatch('collapseNavbar')
  }
}
</script>

<style lang="scss" scoped>

</style>
