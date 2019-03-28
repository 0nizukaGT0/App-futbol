<template>
<div id="home">
  <v-container>
    <h2>Matches de Hoy</h2>
    <v-carousel>
      <v-carousel-item v-for="(item,i) in items" :key="i">
        <v-card>
          <v-card-title>{{i}}</v-card-title>
          <v-card-text>{{item.src}}</v-card-text>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</div>
</template>
<script>
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
      ]
    }
  },
  computed: {
    partidos () {
      return this.$store.state.schedule
    }
  }
}
</script>
