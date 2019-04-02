<template>
<div id="home">

  <v-container bg fill-height grid-list-md text-xs-center>
        <v-layout row wrap align-center>
          <v-flex>
            Hello I am center to vertically using "align-center".
            <v-btn v-if='isAdmin'>El usuario{{currentUser}} es admin </v-btn>
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
