const state = {
  _tools: [
    {
      name: 'JavaScript',
      src: require('../../assets/images/tools/javascript.png')
    }, {
      name: 'Vue.js',
      src: require('../../assets/images/tools/vue.svg')
    }, {
      name: 'React.js',
      src: require('../../assets/images/tools/react.svg')
    }, {
      name: 'Node.js',
      src: require('../../assets/images/tools/node.svg')
    }, {
      name: 'Express.js',
      src: require('../../assets/images/tools/express.png')
    }, {
      name: 'MongoDB',
      src: require('../../assets/images/tools/mongo.svg')
    }, {
      name: 'Git',
      src: require('../../assets/images/tools/git.svg')
    }, {
      name: 'HTML5',
      src: require('../../assets/images/tools/html5.svg')
    }, {
      name: 'CSS3',
      src: require('../../assets/images/tools/css3.svg')
    }
  ]
}

const getters = {
  getTools: state => state._tools
}

export default {
  namespaced: true,
  state,
  getters
}
