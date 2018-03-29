<template>
  <div>
    <!-- Navbar for screen sizes 'SMALL' and below -->
    <div
      :class="navbarClasses"
    >
      <Navbar/>
    </div>
    <!-- 'Container' for entire page -->
    <div
      id="app"
      class="container-fluid"
    >
      <!-- 'Row' for entire page -->
      <div
        class="row"
      >
        <!-- Sidebar for screen sizes 'MEDIUM' and above -->
        <div
          :class="sidebarClasses"
        >
          <Sidebar :class="sidebarLayout"/>
        </div>
        <!-- Main Content -->
        <main
          :class="mainLayout"
        >
          <div
            class="container-fluid"
          >
            <!-- Div spacer for small screens (to make room for navbar) -->
            <div
              data-purpose="Div spacer for navbar"
              :class="divSpacerClasses"
              style="height: 60px;"
            >
            </div>
            <!-- All pages go through router -->
            <router-view/>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/navigation/Navbar'
import Sidebar from './components/navigation/Sidebar'

export default {
  name: 'App',
  data () {
    return {
      navbarClasses: [
        'd-lg-none', 'bg-secondary', 'mb-2', 'fixed-top'
      ],
      sidebarClasses: [
        'd-none', 'd-lg-block'
      ],
      sidebarLayout: [
        'col-lg-3', 'col-xl-2'
      ],
      divSpacerClasses: [
        'col-12', 'd-lg-none'
      ],
      mainLayout: [
        'col-12', 'col-lg-9', 'col-xl-10', 'ml-auto', 'pt-5'
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
