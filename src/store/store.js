import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    _sidebarLinks: [
      {
        name: 'Home',
        href: 'https://benrgarcia.github.io/Portfolio-Page-v2/#/'
      },
      {
        name: 'About',
        href: 'https://benrgarcia.github.io/Portfolio-Page-v2/#/about'
      },
      {
        name: 'Portfolio',
        href: 'https://benrgarcia.github.io/Portfolio-Page-v2/#/portfolio'
      },
      {
        name: 'R&eacute;sum&eacute;',
        href: 'https://benrgarcia.github.io/Portfolio-Page-v2/#/resume'
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
