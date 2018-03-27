<template>
  <div class="align-items-center">
    <router-link
      tag="li"
      :class="css.class.li"
      :to="link.href"
    >
      <a
        :class="css.class.a"
        :style="css.style.a"
        :href="link.href"
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
    </router-link>
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
