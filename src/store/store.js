import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
import navigation from './modules/navigation'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    navigation
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {
    // Collapse navbar when view is mounted -- an admittedly 'hackey' workaround
    collapseNavbar: context => $('#navbarNavDropdown').collapse('hide')
  }
})
