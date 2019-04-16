<template>
<div class="text-xs-center">
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn dark icon v-on="on">
        <v-icon>more_vert</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-tile v-if="!isUserLog">
        <v-list-tile-title><LogIn></LogIn></v-list-tile-title>
      </v-list-tile>
      <v-list-tile v-if="!isUserLog">
        <v-list-tile-title><registrar></registrar></v-list-tile-title>
      </v-list-tile>
      <v-list-tile v-if="isAdmin">
        <v-list-tile-title><addMatch></addMatch></v-list-tile-title>
      </v-list-tile>
      <v-list-tile v-if="isUserLog">
        <v-list-tile-title><logOut></logOut></v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</div>
</template>
<script>
import LogIn from '@/components/LogIn'
import logOut from '@/components/logOut'
import registrar from '@/components/registrar'
import addMatch from '@/components/addMatch'
export default {
  components: { LogIn, logOut, addMatch, registrar },
  computed: {
    isUserLog: function () {
      return this.$store.state.isUserLog
    },
    isAdmin () {
      return this.$store.getters.isUserAdmin
    }
  }
}
</script>
<style media="screen">
  .v-list__tile:hover{
background-color: rgb(134, 137, 142);
cursor: pointer;
  }
</style>
