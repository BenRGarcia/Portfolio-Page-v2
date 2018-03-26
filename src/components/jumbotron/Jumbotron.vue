<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-3" v-html="displayText"></h1>
      <hr class="my-4">
      <p class="lead">Looking for a Full-Stack JavaScript Ninja?</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      displayText: 'Hi,<br>I\'m Ben'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
