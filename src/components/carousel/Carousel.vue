<template>

</template>

<script>
import Month from './Toggl'

export default {
  data () {
    return {
      // stuff
    }
  },
  components: {
    Month
  },
  computed: {
    getMonths: () => this.$store.getters['toggl/getMonths']
  }
}
</script>

<style lang="scss" scoped>

</style>
