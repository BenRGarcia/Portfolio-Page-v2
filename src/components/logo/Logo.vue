<template>
  <div :class="logoClasses">
    <img :src="imgUrl" :alt="imgAlt" :class="profileImageClasses">
    <h2 :class="headingClasses">Benjamin<br>Garcia</h2>
    <span :class="subheadingClasses">Full Stack Developer</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logoClasses: [
        'p-4'
      ],
      profileImageClasses: [
        'img-fluid', 'rounded-circle', 'border', 'border-danger'
      ],
      headingClasses: [
        'h1', 'mb-0', 'mt-3'
      ],
      subheadingClasses: [
        'h6'
      ],
      imgUrl: require('../../assets/images/profile.jpeg'),
      imgAlt: 'Profile picture of Benjamin Garcia, Full Stack Web Developer'
    }
  }
}
</script>

<style lang="scss" scoped>
.border {
  border-width: 8px !important;
}
</style>
