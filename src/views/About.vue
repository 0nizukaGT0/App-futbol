<template>
<div class="about">
  <h1>Aqui debera existir un botn que mute el state e un store</h1>
  <v-btn dark color="blue" @click="cambiarFecha">aumentar</v-btn>
  <article>
    <h2 class="titulo2">About</h2>
    <h3 class="titulo3">Mission</h3>
    <p class="textopadingleft">
      To support young athletes living in Chicago´s northside neighborhoods, who have an interest in leaning and playing soccer , with opportunities to learn and practice skills related to the game of soccer, specifically those skills around team
      cooperation and good sportsmanship.
    </p>
    <h3 class="titulo3">Vision</h3>
    <p class="textopadingleft">
      The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes through the building of character , self-discipline, and sportmanship.
    </p>
    <h3 class="titulo3">General Information</h3>
    <p class="textopadingleft">
      The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago´s norhtside neighborhoods an environment in which to learn and play soccer. To be a member of NYSL, you must be between the ages of 4-12 and
      reside in a Chicago northside neighborhood NYSL is ran by a mall full-time ataff, and relies on thegenerous volunteer time of parent and previous league members.
    </p>
  </article>
</div>
</template>
<script>
export default {
  methods: {
    cambiarFecha: function () {
      this.$store.commit('cambiarFecha')
    }
  }
}
</script>
