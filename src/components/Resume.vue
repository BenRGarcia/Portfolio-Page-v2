<template>
  <p>Resume Test</p>
</template>

<script>
export default {
  mounted: function () {
    return this.$store.dispatch('collapseNavbar')
  }
}
</script>

<style lang="scss" scoped>

</style>
