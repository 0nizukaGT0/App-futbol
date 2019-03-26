import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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

    ],
    schedule: [{
      date: '5 feb',
      team1: 'Las aguilas',
      team2: 'Los perros',
      place: 'depotLab'
    },
    {
      date: '2 jun',
      team1: 'Las arañas',
      team2: 'Los caballos',
      place: 'depotLab2'
    }, {
      date: '4 abr',
      team1: 'Las cucarahas',
      team2: 'Los amiguitos',
      place: 'depotLab3'
    }
    ]
  },
  mutations: {
    cambiarFecha: state => {
      state.schedule.forEach(fecha => {
        fecha.date = '0'
      })
    }

  },
  actions: {

  }
})
