<template>
  <div><!-- Don't delete this div, CSS grid/col received from parent component-->
    <!-- Bootstrap v4 Card -->
    <div
      class="card mb-4"
    >
      <!-- Card image header -->
      <div
        :style="css.style.img"
      >
        <img
          class="card-img-top"
          :src="project.src"
          :alt="imgAlt"
        >
      </div>
      <!-- Card body -->
      <div
        class="card-body pb-1"
      >
        <h5
          class="card-title"
        >
          {{ project.name }}
        </h5>
        <p
          class="card-text mb-0"
        >
          {{ project.description }}
        </p>
        <!-- Link to Project-Specific GitHub Repo -->
        <div
          class="text-right"
        >
          <a
            :href="project.href"
            target="_blank"
          >
            <i class="material-icons align-top">link</i>
          </a>
        </div>
      </div>
    </div>
  </div><!-- Don't delete this div, CSS grid/col received from parent component-->
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
        style: {
          img: {
            height: '200px',
            overflow: 'hidden'
          }
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
