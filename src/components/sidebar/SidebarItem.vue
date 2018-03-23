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
        'nav-item', 'py-2', 'pl-3', 'd-flex', 'align-items-center'
      ],
      iconLinkClasses: [
        'align-items-center'
      ],
      linkClasses: [
        'nav-link', 'd-inline-block'
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
</style>
