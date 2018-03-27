<template>
  <div class="align-items-center">
    <li
      :class="liClasses"
    >
      <a
        :class="sidebarItemsClasses.a"
        :style="sidebarItemsStyles"
        :href="href"
        :target="sidebarItemsTarget"
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
    </li>
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
    'sidebarItemsStyles',
    'sidebarItemsTarget'
  ]
}
</script>

<style lang="scss" scoped>
a:hover {
  background-color: #ddd;
}
</style>
