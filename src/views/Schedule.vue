<template lang="html">
  <div>
    <h1>schedule</h1>
    <v-btn @click="enviar">enviar</v-btn>
  </div>

</template>

<script>
import db from '@/fb.js'
export default {
  methods: {
    enviar () {
      const team = {
        team_id: '12345d',
        number_players: 10,
        name_team: 'el gallo va llegando'
      }
      db.collection('teams').add(team).then(() => { console.log('añadido') })
    }
  }
}

</script>

<style lang="css" scoped>
</style>
