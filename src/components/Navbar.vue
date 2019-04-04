<template >
<nav>
  <v-toolbar flat app color="green darken-1">
    <v-toolbar-side-icon class="green darken-2" @click="drawer=! drawer"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">{{this.$route.name}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <logOut v-if="isUserLog"></logOut>
    <registrar v-if="!isUserLog"></registrar>
    <!-- <v-btn v-if="isUserLog" depressed @click="state">State</v-btn> -->
    <LogIn v-if="!isUserLog" />

  </v-toolbar>
  <v-navigation-drawer dark v-model="drawer" app class="secondary">
    <v-layout column fill-height>

      <v-list>
        <v-layout column align-center>
        <v-flex align-self-center>
          <v-avatar :tile="false" :size="160" color="grey lighten-4">
          <img :src="activeAvatar" alt="avatar"> </v-avatar>
        </v-flex>
        </v-layout>
        <v-list-tile dark v-for="link in links" :key="link.title" router :to="link.route">
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{link.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-spacer></v-spacer>
      <v-list>

            <v-layout>
              <Contact></Contact>
              <NyslRules></NyslRules>
              <Formulario></Formulario>
          </v-layout>
      </v-list>
    </v-layout>
  </v-navigation-drawer>
</nav>
</template>

<script>
import LogIn from '@/components/LogIn'
import logOut from '@/components/logOut'
import registrar from '@/components/registrar'
import fire from '@/fb.js'
import Contact from '@/components/Contact'
import NyslRules from '@/components/Nysl-Rules'
import Formulario from '@/components/Formulario'

export default {
  components: {
    LogIn,
    registrar,
    logOut,
    Contact,
    NyslRules,
    Formulario
  },
  data () {
    return {
      drawer: false,
      avatarImg: ['https://kolping.bo/wp-content/uploads/2017/10/avatar-anonimo.png',
        'https://c8.alamy.com/compes/r9y3e2/avatar-nino-sosteniendo-un-balon-de-futbol-sobre-fondo-blanco-ilustracion-vectorial-r9y3e2.jpg',
        'https://pngimage.net/wp-content/uploads/2018/05/admin-avatar-png.png']
    }
  },
  computed: {
    links: function () {
      return this.$store.state.links
    },
    isUserLog: function () {
      return this.$store.state.isUserLog
    },
    isAdmin () {
      return this.$store.getters.isUserAdmin
    },
    activeAvatar: function () {
      let source = ''
      if (this.isAdmin) {
        source = this.avatarImg[2]
      } else if (this.isUserLog) {
        source = this.avatarImg[1]
      } else {
        source = this.avatarImg[0]
      }
      return source
    }
  }
  /*,
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
*/
}
</script>
