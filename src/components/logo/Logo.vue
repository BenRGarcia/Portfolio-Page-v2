<template>
  <div
    class="p-3"
  >
    <img
      :src="imgSrc"
      :alt="imgAlt"
      class="img-fluid rounded-circle profile-img"
    >
    <h2
      class="h1 mb-2 mt-3"
      v-html="name"
    >
    </h2>
    <span
      class="h5 border-bottom"
    >
      {{ title }}
    </span>
    <small>
      <a
        :href="mailto"
      >
        {{ emailAddr }}
      </a>
    </small>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgSrc: require('../../assets/images/profile.jpeg'),
      imgAlt: 'Profile picture of Benjamin Garcia, Full Stack Web Developer',
      name: 'Benjamin<br>Garcia',
      title: 'Full Stack Developer',
      emailAddr: 'ben@SeeBenProgram.com',
      mailto: 'mailto:ben@SeeBenProgram.com?Subject=I%20want%20to%20hire%20you%21'
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-img {
  border: 8px solid #f00;
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
