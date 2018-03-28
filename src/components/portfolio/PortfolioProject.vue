<template>
  <div><!-- Don't delete this, it's required to receive CSS column from parent component-->
    <div class="card mb-4">
      <div>
        <img class="card-img-top" :src="project.src" :alt="imgAlt">
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ project.name }}</h5>
        <p class="card-text">{{ project.description }}</p>
        <a href="#" target="_blank" class="btn btn-danger">GitHub</a>
      </div>
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
  background-color: rgba(0, 0, 0, 0.1)
}
.card {
  box-shadow: 1px 5px 5px 0 rgba(0,0,0,0.08),
              2px 5px 8px 0 rgba(0,0,0,0.10);
}
</style>
