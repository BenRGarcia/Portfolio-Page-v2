<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <!-- Sidebar -->
      <Sidebar :class="sidebarLayout"/>
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
import Sidebar from './components/sidebar/sidebar'

export default {
  name: 'App',
  data () {
    return {
      sidebarLayout: [
        'col-3'
      ],
      mainLayout: [
        'col-9', 'ml-auto'
      ]
    }
  },
  components: {
    Sidebar
  }
}
</script>

<style>

</style>
