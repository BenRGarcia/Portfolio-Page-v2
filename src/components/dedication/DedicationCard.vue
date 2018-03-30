<template>
  <!-- Card container for dev tools -->
  <div
    class="card"
  >
    <div
      class="card-header pl-4"
    >
      <h2
        class="mb-0"
      >
        {{ cardTitle }}
      </h2>
    </div>
    <div
      class="card-body"
    >
      <div
        class="row"
      >
        <Carousel/>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '../carousel/Carousel'

export default {
  data () {
    return {
      cardTitle: 'Dedication'
    }
  },
  components: {
    Carousel
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 20px;
}
</style>
