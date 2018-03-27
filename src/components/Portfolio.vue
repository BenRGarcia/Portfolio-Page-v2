<template>
  <p>Portfolio Test</p>
</template>

<script>
export default {
  computed: {

  },
  mounted: function () {
    return this.$store.dispatch('collapseNavbar')
  }
}
</script>

<style lang="scss" scoped>

</style>
