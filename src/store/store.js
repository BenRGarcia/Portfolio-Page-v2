import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    _navigationLinks: [
      {
        name: 'Home',
        href: '/#/home',
        icon: 'home'
      },
      {
        name: 'About',
        href: '/#/about',
        icon: 'info'
      },
      {
        name: 'Portfolio',
        href: '/#/portfolio',
        icon: 'photo_library'
      },
      {
        name: 'R&eacute;sum&eacute;',
        href: '/#/resume',
        icon: 'picture_as_pdf'
      }
    ]
  },
  getters: {
    getNavigationLinks (state) {
      return state._navigationLinks
    }
  },
  mutations: {},
  actions: {}
})
