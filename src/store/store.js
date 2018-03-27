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
      }
    ],
    _navigationLinksSocial: [
      {
        name: 'Contact',
        href: 'mailto:ben@SeeBenProgram.com?Subject=I%20want%20to%20hire%20you%21',
        icon: 'email'
      },
      {
        name: 'GitHub: /BenRGarcia',
        href: 'https://github.com/BenRGarcia',
        icon: 'code',
        target: '_blank'
      }
    ]
  },
  getters: {
    getNavigationLinksInternal (state) {
      return state._navigationLinks
    },
    getNavigationLinksExternal (state) {
      return state._navigationLinksSocial
    }
  },
  mutations: {},
  actions: {}
})
