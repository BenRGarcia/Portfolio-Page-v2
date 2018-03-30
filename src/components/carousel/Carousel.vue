<template>
  <!-- Bootstrap Carousel -->
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <!-- Indicator Lines -->
    <ol class="carousel-indicators">
      <!-- <li data-target="dataTarget" data-slide-to="0" class="active"></li>
      <li data-target="dataTarget" data-slide-to="1"></li>
      <li data-target="dataTarget" data-slide-to="2"></li> -->
      <li
        v-for="(month, index) in months"
        :key="index"
        :data-target="dataTarget"
        :data-slide-to="index"
        class="active"
      >
      </li>
    </ol>
    <!-- Carousel Images -->
    <div class="carousel-inner">
      <!-- <div class="carousel-item active">
        <img class="d-block w-100" src="" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="" alt="Third slide">
      </div> -->

      <Months
        v-for="(month, id) in months"
        :key="id + '-month'"
        :month="month"
      />

    </div>
    <!-- 'Previous Image' Button -->
    <!-- <a class="carousel-control-prev" :href="dataTarget" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a> -->
    <!-- 'Next Image' Button -->
    <!-- <a class="carousel-control-next" :href="dataTarget" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a> -->
  </div>
</template>

<script>
import Months from './Toggl'

export default {
  data () {
    return {
      dataTarget: '#carousel-img'
    }
  },
  components: {
    Months
  },
  computed: {
    months () {
      return this.$store.getters['toggl/getMonths']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
