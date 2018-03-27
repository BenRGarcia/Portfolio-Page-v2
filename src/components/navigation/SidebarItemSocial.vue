<template>
  <div class="align-items-center">
    <li
      :class="css.class.li"
    >
      <a
        :class="css.class.a"
        :style="css.style.a"
        :href="link.href"
        :target="link.target"
      >
        <i
          class="material-icons align-middle"
        >
          {{ link.icon }}
        </i>
        <span
          :class="css.class.span"
          :href="link.href"
          v-html="link.name"
        >
        </span>
      </a>
    </li>
  </div>
</template>

<script>
export default {
  props: [
    'link',
    'css'
  ]
}
</script>

<style lang="scss" scoped>
a:hover {
  background-color: #ddd;
}
</style>
