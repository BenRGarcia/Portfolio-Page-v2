<template>
    <div id="img-wrapper" class="mx-auto">
      <img
        :src="resumeSrc"
        :alt="imgAlt"
        class="img-fluid mx-auto d-block"
      >
    </div>
</template>

<script>
export default {
  data () {
    return {
      resumeSrc: require('../assets/images/docs/Resume.png'),
      imgAlt: 'Image of Resume Text Document'
    }
  },
  mounted: function () {
    return this.$store.dispatch('collapseNavbar')
  }
}
</script>

<style lang="scss" scoped>
#img-wrapper {
  max-width: 1100px;
}
img {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
