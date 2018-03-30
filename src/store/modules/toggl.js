const state = {
  _months: [
    {
      month: 'January 2018',
      src: require('../../assets/toggl/2018-01_1134x533.png')
    }, {
      month: 'February 2018',
      src: require('../../assets/toggl/2018-02_1134x533.png')
    }
  ]
}

const getters = {
  getMonths: state => state._months
}

export default {
  namespaced: true,
  state,
  getters
}
