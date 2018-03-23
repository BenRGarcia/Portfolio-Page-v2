<template>
  <div>
    <li
      :class="itemClasses"
    >
      <a
        :href="href"
        :class="linkClasses"
        v-html="name"
      >
      </a>
    </li>
  </div>
</template>

<script>
export default {
  props: [
    'href', 'name'
  ],
  data () {
    return {
      itemClasses: [
        'nav-item'
      ],
      linkClasses: [
        'nav-link'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
