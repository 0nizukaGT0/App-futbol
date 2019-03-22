<template>
  <div class="about">
    <h1>Aqui debera existir un botn que mute el state e un store</h1>
    <v-btn dark color="blue" @click="cambiarFecha">aumentar</v-btn>
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
