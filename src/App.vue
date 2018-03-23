<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <!-- Sidebar for screen sizes MEDIUM and above -->
      <div :class="sidebarClassesLarge">
        <SidebarLarge :class="sidebarLayoutLarge"/>
      </div>
      <!-- Main Content -->
      <main :class="mainLayout">
        <div class="container">
          <router-view/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SidebarLarge from './components/sidebar/Sidebar-Large'

export default {
  name: 'App',
  data () {
    return {
      sidebarClassesLarge: [
        'd-none', 'd-md-block'
      ],
      sidebarLayoutLarge: [
        'col-md-4', 'col-lg-3'
      ],
      mainLayout: [
        'col-12', 'col-md-8', 'col-lg-9', 'ml-auto'
      ]
    }
  },
  components: {
    SidebarLarge
  }
}
</script>

<style>

</style>
