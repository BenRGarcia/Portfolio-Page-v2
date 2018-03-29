<template>
  <div>
    <div class="row">
      <!-- Jumbotron -->
      <div class="col-12">
        <Jumbotron/>
      </div>
      <!-- Container for 'Skills' -->
      <div class="container">
        <!-- Card container for dev tools -->
        <div class="card" style="border-radius: 20px!important;">
          <div class="card-header pl-4">
            <h2 class="mb-0">Skills</h2>
          </div>
          <div class="card-body">
            <div class="row">
              <!-- Images of Tools -->
              <DevTools
                v-for="(tool, id) in tools"
                :key="id"
                :tool="tool"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Container for 'Dedication' -->
      <div class="container">
        <!-- Card container for dev tools -->
        <div class="card" style="border-radius: 20px!important;">
          <div class="card-header pl-4">
            <h2 class="mb-0">Dedication</h2>
          </div>
          <div class="card-body">
            <div class="row">
              <!-- Chart of Hours Studied by Month -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from './jumbotron/Jumbotron'
import DevTools from './devtools/DevTools'

export default {
  components: {
    Jumbotron,
    DevTools
  },
  data () {
    return {
      tools: [
        {
          name: 'JavaScript',
          src: require('../assets/images/tools/javascript.png')
        }, {
          name: 'Vue.js',
          src: require('../assets/images/tools/vue.svg')
        }, {
          name: 'React.js',
          src: require('../assets/images/tools/react.svg')
        }, {
          name: 'Node.js',
          src: require('../assets/images/tools/node.svg')
        }, {
          name: 'Express.js',
          src: require('../assets/images/tools/express.png')
        }, {
          name: 'MongoDB',
          src: require('../assets/images/tools/mongo.svg')
        }, {
          name: 'Git',
          src: require('../assets/images/tools/git.svg')
        }, {
          name: 'HTML5',
          src: require('../assets/images/tools/html5.svg')
        }, {
          name: 'CSS3',
          src: require('../assets/images/tools/css3.svg')
        }
      ]
    }
  },
  mounted: function () {
    return this.$store.dispatch('collapseNavbar')
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 15px;
  border: 2px solid #ff0000;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.15),
              6px 8px 18px 0 rgba(0, 0, 0, 0.1);
}
</style>
