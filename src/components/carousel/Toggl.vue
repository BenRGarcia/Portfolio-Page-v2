<template>
    <!-- Image Carousel -->
    <div class="carousel-item">
      <img
        :src="month.src"
        :alt="month.name"
        class="d-block w-100 active"
      >
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
