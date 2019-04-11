<template lang="html">
  <div>
    <v-layout column class="homeLayout" align-around>
      <v-layout >
        <v-flex class="ma-2 "> <v-btn class="buttonStyle headline" to="/teams/U1" dark block large color="lime lighten-2">U1</v-btn></v-flex>
        <v-flex class="ma-2 "> <v-btn class="buttonStyle headline" to="/teams/U2" dark block large color="lime lighten-2">U2</v-btn></v-flex>
      </v-layout>
      <v-layout>
        <v-flex class="ma-2 "> <v-btn class="buttonStyle headline" to="/teams/U3" dark block large color="lime lighten-2">U3</v-btn></v-flex>
        <v-flex class="ma-2 "> <v-btn class="buttonStyle headline" to="/teams/U4" dark block large color="lime lighten-2">U4</v-btn></v-flex>
      </v-layout>
      <v-layout>
        <v-flex class="ma-2 "> <v-btn class="buttonStyle headline" to="/teams/U5" dark block large color="lime lighten-2">U5</v-btn></v-flex>
        <v-flex class="ma-2 "> <v-btn class="buttonStyle headline" to="/teams/U6" dark block large color="lime lighten-2">U6</v-btn></v-flex>
      </v-layout>
      <v-layout>
        <v-flex class="ma-2 "> <v-btn class="buttonStyle headline" to="/teams/U7" dark block large color="lime lighten-2">U7</v-btn></v-flex>
        <v-flex class="ma-2 "> <v-btn class="buttonStyle headline" to="/teams/U8" dark block large color="lime lighten-2">U8</v-btn></v-flex>
      </v-layout>
    </v-layout>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.buttonStyle{
  border-radius: 20px;
  height: 80px;
}
</style>
