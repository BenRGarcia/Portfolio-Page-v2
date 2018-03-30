<template>
    <!-- Image Carousel -->
    <div class="carousel-item">
      <img
        :src="month.src"
        :alt="month.name"
      >
      <div class="carousel-caption d-none d-md-block">
        <h5>{{ month.name }}</h5>
        <p>Monthly Hours of Coding</p>
      </div>
    </div>
</template>

<script>
export default {
  props: [
    'month'
  ],
  data () {
    return {
      // ... stuff
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
