<template>
  <div>
    <router-link
      tag='li'
      :to="{ name: link.routerLink }"
      :class="itemClasses"
    >
      <a
        :class="linkClasses"
        v-html="link.name"
      >
      </a>
    </router-link>
  </div>
</template>

<script>
export default {
  props: [
    'link'
  ],
  data () {
    return {
      itemClasses: [
        'nav-item',
        'pl-2',
        'active'
      ],
      linkClasses: [
        'nav-link',
        'd-inline-block'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
