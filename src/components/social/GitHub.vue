<template>
  <div class="text-center">
    <a
      :href="href"
      target="_blank"
    >
      <img
        :src="imageUrl"
        alt="Octocat"
        class="img-fluid"
      >
      <span>github.com/BenRGarcia</span>
    </a>
  </div>
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
a {
  text-decoration: none;
  color: initial;
}
img {
  margin-top: 7rem !important;
}
</style>
