<template>
  <div>
    <div
      class="row"
    >
      <div class="col-12 px-0">
        <div
          :style="cssChildBanner"
          :class="hideOnSmall"
        >
          <h1
            class="mb-0"
          >
            R&eacute;sum&eacute;
          </h1>
        </div>
      </div>
    </div>
    <div
      id="img-wrapper"
      class="mx-auto"
    >
      <img
        :src="imgSrc"
        :alt="imgAlt"
        class="img-fluid"
      >
      <a
        :href="pdfFile"
        :download="suggestedFileName"
      >
        <i
          class="material-icons"
        >
          file_download
        </i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'cssChildBanner',
    'hideOnSmall'
  ],
  data () {
    return {
      imgSrc: require('../../static/documents/Resume.png'),
      imgAlt: 'Image of Resume Text Document',
      pdfFile: require('../../static/documents/Resume.pdf'),
      suggestedFileName: 'Resume_Benjamin_R_Garcia.pdf'
    }
  },
  mounted: function () {
    return this.$store.dispatch('collapseNavbar')
  }
}
</script>

<style lang="scss" scoped>
a {
  color: #000;
}
i {
  position: fixed;
  bottom: 25px;
  right: 25px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 50%;
}
i:hover {
  background-color: rgba(0, 0, 0, 0.35);
}
#img-wrapper {
  max-width: 1100px;
}
img {
  box-shadow: 0 4px  8px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
