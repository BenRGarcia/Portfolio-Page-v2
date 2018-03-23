<template>
  <div>
    <li
      :class="itemClasses"
    >
    <a
      :class="iconLinkClasses"
      id="iconLink"
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
#iconLink {
  line-height: 0;
}
a {
  color: initial;
}
a:hover {
  background-color: #ddd;
}
</style>
