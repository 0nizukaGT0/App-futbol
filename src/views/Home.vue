<template>
<div id="home">

  <v-container bg fill-height grid-list-md text-xs-center>
        <v-layout row wrap align-center>
          <v-flex>
            Hello I am center to vertically using "align-center".
            Aqui añadiremos un inout que hara una mutaion a la fecha actual , eso trigerea el
             getter que nos devuelve fechas cercanas a eso , en este compoente debemos ver que hacer si no hya nada
            <v-btn v-if='isAdmin'>El usuario{{currentUser}} es admin </v-btn>
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
