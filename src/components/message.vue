<template lang="html">
  <v-card>
  <v-card v-for="message in mensajes" :key="message.id">
    <v-card-title>{{message.user}}</v-card-title>
    <v-card-text>{{message.mensaje}}</v-card-text>
    <v-card-text>{{message.fecha}}</v-card-text>
  </v-card>
  </v-card>
</template>

<script>
export default {
  computed: {
    mensajes: function () {
      return this.$store.state.chats
    }
  }
}
</script>

<style lang="css" scoped>
</style>
