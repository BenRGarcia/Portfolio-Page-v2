<template>
  <div class="align-items-center">
    <!-- Render if 'RouterLink' property is present (Internal link) -->
    <router-link
      v-if="link.routerLink"
      tag="li"
      :class="css.class.li"
      :to="{ name: link.routerLink}"
    >
      <a
        :class="css.class.a"
        :style="css.style.a"
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
    <!-- Render if 'RouterLink' property is present (External link) -->
    <li
      v-else
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
