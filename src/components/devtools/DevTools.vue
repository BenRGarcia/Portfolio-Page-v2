<template>
  <div
    :class="css.class.grid"
  >
    <div class="card m-2">
      <div class="card-header text-center">
        <h5 class="mb-0">{{ tool.name }}</h5>
      </div>
      <div class="card-body pb-1 px-2">
        <div id="imgWrapper" class="text-center">
          <img
            :src="tool.src"
            :alt="tool.name"
            :class="css.class.img"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'tool'
  ],
  data () {
    return {
      css: {
        class: {
          grid: [
            'col-12',
            'col-sm-6',
            'col-md-4'
          ],
          img: [
            'img-fluid',
            'mb-2'
          ]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  height: 70px;
}
.card {
  box-shadow: 0 2px  5px 0 rgba(0, 0, 0, 0.1),
              0 4px 10px 0 rgba(0, 0, 0, 0.08);
}
</style>
