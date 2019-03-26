<template>
<div id="home">
  <v-container>
    <h2>Matches de Hoy</h2>
    <code>Los partidos que se carguen aqui deberian de ser solo los mas recientes a la fecha actual</code>
    <v-layout row justify-space-between>
      <v-flex md3>
        <v-btn class="ma-1" block outline color="red">Local</v-btn>
      </v-flex>
      <v-flex md3>
        <v-btn class="ma-1" block outline color="red">Adversary</v-btn>
      </v-flex>
      <vflex md3>
        <v-btn class="ma-1" block outline color="red">Place</v-btn>
      </vflex>
      <v-flex md3>
        <v-btn class="ma-1" block outline color="red">Date</v-btn>
      </v-flex>
    </v-layout>
    <v-layout v-for="partido in partidos" :key="partido.date" row justify-space-between>
      <v-flex md3>
        <v-btn class="ma-1" block outline>{{partido.team1}}</v-btn>
      </v-flex>
      <v-flex md3>
        <v-btn class="ma-1" block outline>{{partido.team2}}</v-btn>
      </v-flex>
      <vflex md3>
        <v-btn class="ma-1" block outline>{{partido.place}}</v-btn>
      </vflex>
      <v-flex md3>
        <v-btn class="ma-1" block outline>{{partido.date}}</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>
<script>
export default {
  components: {},
  computed: {
    partidos () {
      return this.$store.state.schedule
    }
  }
}
</script>
