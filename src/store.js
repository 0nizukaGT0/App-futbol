import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    links: [{
      title: 'Home',
      icon: 'home',
      route: '/'
    },
    {
      title: 'About',
      icon: 'add',
      route: '/about'
    }, {
      title: 'NYSL Rules',
      icon: 'account_box',
      route: '/nysl-rules'
    }, {
      title: 'Schedule',
      icon: 'schedule',
      route: '/schedule'
    }, {
      title: 'Formulario',
      icon: 'fas fa-id-card',
      route: '/formulario'
    }, {
      title: 'Contacto',
      icon: 'fas fa-id-card',
      route: '/contact'
    }

    ],
    schedule: [
      {
        date: '5 feb',
        teams: 'u1 u1',
        place: 'kil'

      }, {
        date: '3 ene',
        teams: 'u2uu2',
        place: 'london'

      }]

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
