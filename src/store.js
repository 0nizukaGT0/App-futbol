import Vue from 'vue'
import Vuex from 'vuex'
import fire from './fb.js'
Vue.use(Vuex)
let dataFire = []
fire.db.collection('matches').onSnapshot(res => {
  const changes = res.docChanges()
  changes.forEach(change => {
    if (change.type === 'added') {
      dataFire.push({
        ...change.doc.data(),
        id: change.doc.id
      })
    }
  })
})
export default new Vuex.Store({
  state: {
    matches: dataFire,
    links: [
      {
        title: 'Home',
        icon: 'home',
        route: '/'
      },
      {
        title: 'About',
        icon: 'add',
        route: '/about'
      }, {
        title: 'Schedule',
        icon: 'schedule',
        route: '/schedule'
      }

    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {

  }
})
