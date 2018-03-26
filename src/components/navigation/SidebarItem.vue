<template>
  <div class="align-items-center">
    <li
      :class="liClasses"
    >
      <a
        :class="aClasses"
        :href="href"
      >
        <i class="material-icons align-middle">{{ icon }}</i>
        <span
          :href="href"
          :class="spanClasses"
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
    'href', 'name', 'icon'
  ],
  data () {
    return {
      liClasses: [
        'nav-item', 'd-flex', 'border', 'w-100'
      ],
      aClasses: [
        'w-100'
      ],
      spanClasses: [
        'nav-link', 'd-inline-block', 'py-4'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: initial;
  line-height: 1.0;
  font-size: 1.2rem;
  text-decoration: none;
}
a:hover {
  background-color: #ddd;
}
</style>
