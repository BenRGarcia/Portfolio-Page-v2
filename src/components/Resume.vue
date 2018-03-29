<template>
  <iframe
    :src="googleDocSrc">
  </iframe>
</template>

<script>
export default {
  data () {
    return {
      googleDocSrc: 'https://docs.google.com/document/d/e/2PACX-1vRUxGTi7SuTagw9LYU-b0cgNl8EYOjAR7OHGDMxlTDTLwk89xtwhuzNJDw65ByMSySqjE1cIhfUVwPH/pub?embedded=true'
    }
  },
  mounted: function () {
    return this.$store.dispatch('collapseNavbar')
  }
}
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 80vh;
  border-width: 2px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
}
</style>
