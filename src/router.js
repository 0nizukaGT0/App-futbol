import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Chat from './views/Chat.vue'
import Teams from './views/Teams.vue'
import Team from './views/Team.vue'
import Places from './views/Places.vue'
import Place from './views/Place.vue'
import Schedule from './views/Schedule.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat

    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule

    },
    {
      path: '/teams',
      name: 'Teams',
      component: Teams

    },
    {
      path: '/teams/:team',
      name: 'Teams',
      props: true,
      component: Team

    },
    {
      path: '/places',
      name: 'Places',
      component: Places

    },
    {
      path: '/places/:place',
      name: 'Places',
      props: true,
      component: Place

    }
  ]
})
