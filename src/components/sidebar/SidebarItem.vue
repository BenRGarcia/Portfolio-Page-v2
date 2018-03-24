<template>
  <div class="align-items-center">
    <li
      :class="liClasses"
    >
      <a
        :class="aClasses"
        :href="href"
      >
        <i class="material-icons">{{ icon }}</i>
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
        'nav-item', 'd-flex', 'border', 'rounded-right', 'w-100', 'align-middle'
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
