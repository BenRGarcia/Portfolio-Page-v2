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
        @click="collapseNavBar"
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
  },
  methods: {
    collapseNavBar () {
      // Still working on solution
      // return this.$emit.collapseNavBar()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
