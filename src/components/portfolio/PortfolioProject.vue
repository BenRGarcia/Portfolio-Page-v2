<template>
  <div class="card">
    <img class="card-img-top" :src="project.src" :alt="imgAlt">
    <div class="card-body">
      <h5 class="card-title">{{ project.name }}</h5>
      <p class="card-text">{{ project.description }}</p>
      <a href="#" class="btn btn-primary"></a>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'project'
  ],
  data () {
    return {
      imgAlt: 'Portfolio Project Cover Image',
      css: {
        class: {
          card: [],
          cardImg: [],
          cardBody: []
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  height: 225px;
}
</style>
