<template>
  <div class="text-center">
    <a
      :href="href"
      target="_blank"
    >
      <img
        :src="imageUrl"
        alt="Octocat"
        class="img-fluid w-50"
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
</style>
