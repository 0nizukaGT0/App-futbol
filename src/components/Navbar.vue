<template >
<nav>
  <v-toolbar flat app color="primary">
    <v-toolbar-side-icon class="blue darken-2" @click="drawer=! drawer"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">North Youth Soccer League hola santi</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-img :src="'https://wi-images.condecdn.net/image/ql00Lg3xAPw/crop/405/f/iStock-613015246.jpg'"></v-img>
    </v-btn>
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
export default {
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
