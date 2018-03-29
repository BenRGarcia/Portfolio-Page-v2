<template>
  <div>
    <!-- Navbar for smaller screen sizes  -->
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
        <!-- Sidebar for larger screen -->
        <div
          :class="sidebarClasses"
        >
          <Sidebar
            :class="sidebarLayout"
          />
        </div>
        <!-- Main Content -->
        <main
          :class="mainLayout"
        >
          <!-- 'Container' for all router views -->
          <div
            class="container-fluid"
          >
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
        'd-lg-none',
        'bg-secondary',
        'mb-2'
      ],
      sidebarClasses: [
        'd-none',
        'd-lg-block'
      ],
      sidebarLayout: [
        'col-lg-3',
        'col-xl-2'
      ],
      mainLayout: [
        'col-12',
        'col-lg-9',
        'col-xl-10',
        'ml-auto',
        'py-4',
        'px-0'
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
