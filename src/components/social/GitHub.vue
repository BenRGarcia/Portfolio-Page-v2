<template>
  <a
    :href="href"
    target="_blank"
  >
    <img
      :src="imageUrl"
      alt="Octocat"
      class="img-fluid"
    >
  </a>
</template>

<script>
export default {
  data () {
    return {
      imageUrl: require('../../assets/images/Octocat/Octocat.png'),
      href: 'https://github.com/BenRGarcia'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
