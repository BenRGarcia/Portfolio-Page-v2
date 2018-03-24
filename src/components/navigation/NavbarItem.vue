<template>
  <div>
    <li
    :class="itemClasses">
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
        'nav-item', 'pl-2', 'active'
      ],
      linkClasses: [
        'nav-link', 'd-inline-block'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
