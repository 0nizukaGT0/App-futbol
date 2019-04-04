<template>
<div id="home">

  <v-container bg fill-height grid-list-md text-xs-center>
        <v-layout row wrap align-center>
          <v-flex>
            <h4>
            Aqui añadiremos un input que hara una mutaion a la fecha actual , eso trigerea el
             getter que nos devuelve fechas cercanas a eso , en este compoente debemos ver que hacer si no hya nada</h4>
            <v-card v-if='isAdmin'>
              
              <v-text>Saludos {{currentUser}} bienvenido a la app de futbol 🤖</v-text>
            </v-card>
            <v-card></v-card>
          </v-flex>
        </v-layout>
      </v-container>
</div>
</template>
<script>
export default {
  components: {},
  data () {
    return {

    }
  },
  computed: {
    matches () {
      return this.$store.state.matches
    },
    isAdmin () {
      return this.$store.getters.isUserAdmin
    },
    currentUser () {
      return this.$store.state.currentUser
    }
  } }
</script>
