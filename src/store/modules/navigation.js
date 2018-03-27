
const state = {
  _navigationLinksInternal: [
    {
      name: 'Home',
      routerLink: 'Home',
      icon: 'home'
    },
    {
      name: 'Portfolio',
      routerLink: 'Portfolio',
      icon: 'photo_library'
    },
    {
      name: 'R&eacute;sum&eacute;',
      routerLink: 'Resume',
      icon: 'picture_as_pdf'
    }
  ],
  _navigationLinksExternal: [
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
}

const getters = {
  getNavigationLinksInternal: state => state._navigationLinksInternal,
  getNavigationLinksExternal: state => state._navigationLinksExternal
}

export default {
  state,
  getters
}
