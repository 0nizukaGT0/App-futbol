<template>
<div id="home">
        <v-layout column align-between class="homeLayout">
          <v-btn class="buttonHome"  color="lime lighten-2" dark  block to='/teams'>
            <h1 class="display-3">Teams</h1>
          </v-btn>
          <v-btn class="buttonHome"  color="light-green lighten-2" dark block to='/places'>
            <h1 class="display-3" >Places</h1></v-btn>
          <!-- <v-btn class="buttonHome"  disabled  color="green lighten-2" dark block><h1 class="display-3">Dates</h1></v-btn> -->
        </v-layout>
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
    isUserLog: function () {
      return this.$store.state.isUserLog
    },
    currentUser () {
      return this.$store.state.currentUser
    }
  } }
</script>
<style>
.homeLayout{
  height: 100%;
    position: absolute;
    width: 100%;
}
.buttonHome{
  margin: 30px 0;
  border-radius: 45px;
}
</style>
