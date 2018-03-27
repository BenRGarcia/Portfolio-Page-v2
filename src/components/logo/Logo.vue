<template>
  <div :class="logoClasses">
    <img :src="imgUrl" :alt="imgAlt" :class="profileImageClasses">
    <h2 :class="headingClasses">Benjamin<br>Garcia</h2>
    <span :class="subheadingClasses">Full Stack Developer</span>
    <small
      class="border-top"
    >
    <a href="mailto:ben@SeeBenProgram.com?Subject=I%20want%20to%20hire%20you%21">
      ben@SeeBenProgram.com
    </a>
    </small>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logoClasses: [
        'p-3'
      ],
      profileImageClasses: [
        'img-fluid',
        'rounded-circle',
        'border',
        'border-danger'
      ],
      headingClasses: [
        'h1',
        'mb-2',
        'mt-3'
      ],
      subheadingClasses: [
        'h5'
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
small {
  font-size: 90%;
}
a {
  text-decoration: none;
  color: initial;
}
a:hover {
  opacity: 0.7;
}
</style>
