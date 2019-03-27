<template lang="html">
  <div>
    <h1>schedule</h1>
    <v-btn flat @click="enviar">enviar</v-btn>
<v-data-table></v-data-table>
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
      alert('hola')
      const match = {
        date: { day: 2, month: 8 },
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
