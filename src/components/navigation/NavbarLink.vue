<template>
  <div>
    <router-link
      tag='li'
      :to="{ name: link.routerLink }"
      class="nav-item pl-2"
    >
      <a
        class="nav-link d-inline-block"
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
  ]
}
</script>

<style lang="scss" scoped>

</style>
