const state = {
  _projects: [
    {
      name: 'Liri',
      description: 'A Node.js command line app that mimics Siri.',
      imgUrl: '../../assets/images/portfolio/vue.png',
      href: 'https://github.com/BenRGarcia/liri-node-app'
    },
    {
      name: 'Miri',
      description: 'A Node.js command line app that mimics Siri.',
      imgUrl: '../../assets/images/portfolio/vue.png',
      href: 'https://github.com/BenRGarcia/liri-node-app'
    },
    {
      name: 'Niri',
      description: 'A Node.js command line app that mimics Siri.',
      imgUrl: '../../assets/images/portfolio/vue.png',
      href: 'https://github.com/BenRGarcia/liri-node-app'
    }
  ]
}

const getters = {
  getProjects: state => state._projects
}

export default {
  namespaced: true,
  state,
  getters
}
