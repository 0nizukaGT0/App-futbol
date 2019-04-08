import Vue from 'vue'
import Vuex from 'vuex'
import fire from './fb.js'
Vue.use(Vuex)
let dataFire = []
let usuario = {}
let dataChats = []
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
fire.db.collection('chats').onSnapshot(res => {
  const changes = res.docChanges()
  changes.forEach(change => {
    if (change.type === 'added') {
      dataChats.push({
        ...change.doc.data(),
        id: change.doc.id
      })
    }
  })
})
fire.auth.onAuthStateChanged(function (user) {
  if (user) {
    usuario = { userEmail: user.email, userLog: true }
    // User is signed in.
    // var displayName = user.displayName
    // var email = user.email
    // // var emailVerified = user.emailVerified
    // // var photoURL = user.photoURL
    // // var isAnonymous = user.isAnonymous
    // var uid = user.uid
    // var providerData = user.providerData
    console.log(`hay usuario conectado`)
    // ...
  } else {
    // User is signed out.
    // ...
    console.log('No hay usuario conectado')
    usuario = { userEmail: null, userLog: false }
  }
})
export default new Vuex.Store({
  state: {
    matches: dataFire,
    chats: dataChats,
    links: [
      {
        title: 'Home',
        icon: 'home',
        route: '/'
      },
      {
        title: 'Chat',
        icon: 'add',
        route: '/Chat'
      }, {
        title: 'Schedule',
        icon: 'schedule',
        route: '/schedule'
      }

    ],
    usersAdmin: ['migue.shar.17@gmail.com', 'dani@dani.com'],
    currentUser: '',
    stateUser: usuario.userEmail,
    isUserLog: usuario.userLog
  },
  getters: {
    isUserAdmin: state => {
      let admin = state.usersAdmin.some(user => user === state.currentUser)
      return admin
    }
  },
  mutations: {
    userLogged (state, user) {
      state.currentUser = user
      state.isUserLog = !state.isUserLog
    }
  },
  actions: {

  }
})
