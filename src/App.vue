<template>
  <!-- 'Container' for entire page -->
  <div id="app" class="container-fluid">
    <!-- 'Row' for entire page -->
    <div class="row">
      <!-- Navbar for screen sizes 'SMALL' and below -->
      <div :class="navbarClasses">
        <Navbar/>
      </div>
      <!-- Sidebar for screen sizes 'MEDIUM' and above -->
      <div :class="sidebarClasses">
        <Sidebar :class="sidebarLayout"/>
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
import Navbar from './components/sidebar/Navbar'
import Sidebar from './components/sidebar/Sidebar'

export default {
  name: 'App',
  data () {
    return {
      navbarClasses: [
        'col-12', 'd-md-none'
      ],
      sidebarClasses: [
        'd-none', 'd-md-block'
      ],
      sidebarLayout: [
        'col-md-4', 'col-lg-3'
      ],
      mainLayout: [
        'col-12', 'col-md-8', 'col-lg-9', 'ml-auto'
      ]
    }
  },
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style>

</style>
