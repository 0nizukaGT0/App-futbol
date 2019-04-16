<template >
<nav>
  <v-toolbar flat app color="green darken-1">
    <v-toolbar-side-icon dark @click="drawer=! drawer"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">{{this.$route.name}}
      <span v-if="this.$route.name=='Teams' || this.$route.name=='Places'">-></span>
      {{this.$route.params.team || this.$route.params.place}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <menuNavbar></menuNavbar>
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
          </v-layout>
      </v-list>
    </v-layout>
  </v-navigation-drawer>
</nav>
</template>

<script>
import Contact from '@/components/Contact'
import NyslRules from '@/components/Nysl-Rules'
import menuNavbar from '@/components/menuNavbar'
export default {
  components: {
    Contact,
    NyslRules,
    menuNavbar
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
}
</script>
