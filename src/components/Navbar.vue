<template >
<nav>
  <v-toolbar flat app color="green darken-1">
    <v-toolbar-side-icon class="green darken-2" @click="drawer=! drawer"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">{{this.$route.name}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <logOut v-if="isUserLog"></logOut>
    <signUp v-if="!isUserLog" ></signUp>
    <v-btn v-if="isUserLog"  depressed @click="state">State</v-btn>
    <LogIn v-if="!isUserLog"/>
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
import signUp from '@/components/signUp'
import fire from '@/fb.js'
export default {
  components: {
    LogIn,
    signUp,
    logOut
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
    isUserLog: function () { return this.$store.state.isUserLog }
  },
  methods: {
    state () {
      fire.auth.onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName
          var email = user.email
          // var emailVerified = user.emailVerified
          // var photoURL = user.photoURL
          // var isAnonymous = user.isAnonymous
          var uid = user.uid
          var providerData = user.providerData
          console.log(`El usuario actual es ${displayName} con el email ${email} y su id ${uid}  y su proveedor${providerData}`)
          // ...
        } else {
          // User is signed out.
          // ...
          console.log('No hay usuario conectado')
        }
      })
    }
  }
}
</script>
