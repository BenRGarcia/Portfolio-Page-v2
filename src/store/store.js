import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    _navigationLinks: [
      {
        name: 'Home',
        href: 'Home',
        icon: 'home'
      },
      {
        name: 'Portfolio',
        href: 'Portfolio',
        icon: 'photo_library'
      },
      {
        name: 'R&eacute;sum&eacute;',
        href: 'Resume',
        icon: 'picture_as_pdf'
      },
      {
        name: 'Contact',
        href: 'Contact',
        icon: 'email'
      }
    ],
    _navigationLinksSocial: [
      {
        name: 'GitHub',
        href: 'https://github.com/BenRGarcia',
        icon: 'code'
      }
    ]
  },
  getters: {
    getNavigationLinks (state) {
      return state._navigationLinks
    },
    getNavigationLinksSocial (state) {
      return state._navigationLinksSocial
    }
  },
  mutations: {},
  actions: {}
})
