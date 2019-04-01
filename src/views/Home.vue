<template>
<div id="home">
  <v-container>
    <h2>Matches de Hoy</h2>
    <v-carousel>
      <v-carousel-item v-for="(match,i) in matches" :key="i">
        <v-card flat min-height="100%">
          <v-img
          src="https://i.ytimg.com/vi/UbdJF4PDcXU/maxresdefault.jpg"
          aspect-ratio="3"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Match</h3>
            <div><h4 class="mb-1">{{match.team1}} vs {{match.team2}}</h4>
        <p>Este partido se realizara en {{match.place}} en la fecha {{match.date.day}}/{{match.date.month}}</p>
             </div>
          </div>
          </v-card-title>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</div>
</template>
<script>
import fire from '@/fb.js'
export default {
  components: {},
  data () {
    return {
      items: [{
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
      }
      ],
      matches: []
    }
  },
  computed: {
    partidos () {
      return this.$store.state.schedule
    }
  },
  created () {
    fire.db.collection('matches').onSnapshot(res => {
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
  }
}
</script>
