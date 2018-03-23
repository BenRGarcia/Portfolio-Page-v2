<template>
  <div :class="logoClasses">
    <h2 :class="headingClasses">Benjamin<br>Garcia</h2>
    <span :class="subheadingClasses">Full Stack Developer</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logoClasses: [
        'p-5'
      ],
      headingClasses: [
        'h1'
      ],
      subheadingClasses: [
        'h6'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
