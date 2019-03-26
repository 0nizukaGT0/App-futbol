<template lang="html">
  <div>
    <h1>schedule</h1>
    <v-btn flat @click="enviar">enviar</v-btn>
    <table>
      <th>team1</th>
      <th>team2</th>
      <th>place</th>
      <th>date</th>
      <tr v-for="match in matches" :key="match.id">
        <td>{{match.team1}}</td>
        <td>{{match.team2}}</td>
        <td>{{match.place}}</td>
        <td>{{match.date}}</td>
      </tr>
    </table>
  </div>

</template>

<script>
import db from '@/fb.js'
export default {
  data () {
    return {
      matches: []
    }
  },
  created () {
    db.collection('matches').onSnapshot(res => {
      const changes = res.docChanges()
      changes.forEach(change => {
        if (change.type === 'added') {
          this.matches.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  },
  methods: {
    enviar () {
      const match = {
        date: '02/05',
        match_id: '123456b',
        place: 'tu casa',
        team1: 'Las cucarachas',
        team2: 'Los mininos'
      }
      db.collection('matches').add(match).then(() => {
        console.log('añadido')
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
