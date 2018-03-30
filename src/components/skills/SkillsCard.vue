<template>
  <!-- Card container for dev tools -->
  <div
    class="card"
  >
    <div
      class="card-header pl-4"
    >
      <h2
        class="mb-0"
      >
        {{ cardTitle }}
      </h2>
    </div>
    <div
      class="card-body"
    >
      <div
        class="row"
      >
        <!-- Images of Tools -->
        <Skills
          v-for="(tool, id) in tools"
          :key="id"
          :tool="tool"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Skills from './Skills'

export default {
  data () {
    return {
      cardTitle: 'Skills'
    }
  },
  components: {
    Skills
  },
  computed: {
    tools () {
      return this.$store.getters['tools/getTools']
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 20px;
}
</style>
