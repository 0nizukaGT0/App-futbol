<template >
<nav>
  <v-toolbar flat app color="primary">
    <v-toolbar-side-icon class="blue darken-2" @click="drawer=! drawer"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">North Youth Soccer League</v-toolbar-title>
    <v-spacer></v-spacer>
    <SignUp/>
    <LogIn/>
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
import SignUp from '@/components/SignUp'
export default {
  components: { LogIn, SignUp },
  computed: {
    links: function () {
      return this.$store.state.links
    }
  },
  data () {
    return {
      // Home ,About,NYSL Rules,Schedule,Formulario,Contacto..
      drawer: false

    }
  }
}
</script>
