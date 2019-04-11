<template lang="html">
  <div>
    <v-layout column class="homeLayout" align-around>
      <v-layout >
        <v-flex class="ma-2 "> <v-btn class="buttonStyle headline" to="/places/AJ Katzenmaier" dark block large color="light-green lighten-2">AJ Katzenmaier</v-btn></v-flex>
        <v-flex class="ma-2 "> <v-btn class="buttonStyle headline" to="/places/Greenbay" dark block large color="light-green lighten-2">Greenbay</v-btn></v-flex>
      </v-layout>
      <v-layout>
        <v-flex class="ma-2 "> <v-btn class="buttonStyle headline" to="/places/Howard A Yeager" dark block large color="light-green lighten-2">Howard A Yeager</v-btn></v-flex>
        <v-flex class="ma-2 "> <v-btn class="buttonStyle headline" to="/places/Marjorie P Hart" dark block large color="light-green lighten-2">Marjorie P Hart</v-btn></v-flex>
      </v-layout>
      <v-layout>
        <v-flex class="ma-2 "> <v-btn class="buttonStyle headline" to="/places/North" dark block large color="light-green lighten-2">North</v-btn></v-flex>
        <v-flex class="ma-2 "> <v-btn class="buttonStyle headline" to="/places/South" dark block large color="light-green lighten-2">South</v-btn></v-flex>
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
