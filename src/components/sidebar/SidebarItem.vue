<template>
  <div>
    <li
      :class="itemClasses"
    >
    <i class="material-icons">{{ icon }}</i>
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
    'href', 'name', 'icon'
  ],
  data () {
    return {
      itemClasses: [
        'nav-item', 'pt-2', 'pb-2', 'd-flex', 'align-items-center'
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
