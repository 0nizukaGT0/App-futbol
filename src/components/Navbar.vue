<template >
<nav>
  <v-toolbar flat app color="primary">
    <v-toolbar-side-icon class="blue darken-2" @click="drawer=! drawer"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text" v-if="drawer">{{linkActual}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <LogIn />
    <logOut></logOut>
    <google></google>
  </v-toolbar>
  <v-navigation-drawer dark v-model="drawer" app class="secondary">
    <v-list>
      <v-list-tile dark v-for="link in links" :key="link.title" router :to="link.route">
        <v-list-tile-action>
          <v-icon>{{link.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{link.title}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</nav>
</template>

<script>
import LogIn from '@/components/LogIn'
import logOut from '@/components/logOut'
// import SignUp from '@/components/SignUp'
import google from '@/components/google'
import fire from '@/fb.js'
export default {
  components: {
    LogIn,
    google,logOut
  },
  data () {
    return {
      // Home ,About,NYSL Rules,Schedule,Formulario,Contacto..
      drawer: false
    }
  },
  computed: {
    links: function () {
      return this.$store.state.links
    },
    linkActual: function () {
      return 'aqui va dep'
    }
  }
}
</script>
