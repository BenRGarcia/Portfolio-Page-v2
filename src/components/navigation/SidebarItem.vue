<template>
  <div class="align-items-center">
    <router-link
      :to="href" tag="li"
      :class="liClasses"
    >
      <a
        :class="sidebarItemsClasses.a"
        :style="sidebarItemsStyles"
        :href="href"
      >
        <i
          class="material-icons align-middle"
        >
          {{ icon }}
        </i>
        <span
          :href="href"
          :class="sidebarItemsClasses.span"
          v-html="name"
        >
        </span>
      </a>
    </router-link>
  </div>
</template>

<script>
export default {
  props: [
    'href',
    'name',
    'icon',
    'liClasses',
    'sidebarItemsClasses',
    'sidebarItemsStyles'
  ]
}
</script>

<style lang="scss" scoped>
a:hover {
  background-color: #ddd;
}
</style>
