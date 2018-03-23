<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <!-- Sidebar -->
      <Sidebar/>
      <!-- Main Content -->
      <main :class="mainClasses">
        <router-view/>
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
      mainClasses: [
        'col-9'
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
