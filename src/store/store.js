import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    _sidebarLinks: [
      {
        name: 'Home',
        href: 'https://benrgarcia.github.io/Portfolio-Page-v2/#/',
        icon: 'home'
      },
      {
        name: 'About',
        href: 'https://benrgarcia.github.io/Portfolio-Page-v2/#/about',
        icon: 'info'
      },
      {
        name: 'Portfolio',
        href: 'https://benrgarcia.github.io/Portfolio-Page-v2/#/portfolio',
        icon: 'photo_library'
      },
      {
        name: 'R&eacute;sum&eacute;',
        href: 'https://benrgarcia.github.io/Portfolio-Page-v2/#/resume',
        icon: 'picture_as_pdf'
      }
    ]
  },
  getters: {
    getSidebarLinks (state) {
      return state._sidebarLinks
    }
  },
  mutations: {},
  actions: {}
})
