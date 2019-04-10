<template lang="html">
  <v-card class="contentMessage" flat>

  <v-card flat class="cuadroMensaje" v-for="message in mensajes" :key="message.id">
    <v-card-title>{{message.user}}</v-card-title>
    <v-card-text>{{message.mensaje}}</v-card-text>
    <v-card-text>{{message.fecha}}</v-card-text>
  </v-card>
  <v-divider></v-divider>
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
.cuadroMensaje{
  border: solid gray 1px;
  border-radius: 20px;
  padding: 2px;
  margin: 10px;
}
.contentMessage{
  overflow: scroll;
  height: 600px;
}
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {

  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 10px;
}
</style>
