<template>
  <div>
    <li
      :class="itemClasses"
    >
    <a
      :class="iconLinkClasses"
      :href="href"
    >
      <i class="material-icons">{{ icon }}</i>
    </a>
      <a
        :href="href"
        :class="linkClasses"
        v-html="name"
      >
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
      itemClasses: [
        'nav-item', 'pl-3', 'd-flex', 'align-items-center', 'border', 'rounded-right'
      ],
      iconLinkClasses: [
        'align-items-center', 'p-3', 'rounded-circle'
      ],
      linkClasses: [
        'nav-link', 'd-inline-block', 'w-100', 'py-4'
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
}
a:hover {
  background-color: #ddd;
}
</style>
