<template lang="html">
  <v-card class="contentMessage" flat>
  <v-card flat class="cuadroMensaje" v-for="message in mensajes" :key="message.id">
    <v-layout row>
      <div   align-self-center class="ma-2">
        <v-avatar color="yellow">
           <span class="black--text headline">H</span>
         </v-avatar>
      </div>
      <v-flex>
        <v-layout column>
          <v-layout row>
            <v-sheet><span class="green--text subheading">{{message.user}}</span>
              <span class="subheading font-weight-thin.font-italic">
                  {{message.date.dia}}/{{message.date.mes}} {{message.date.hora}}:{{message.date.minuto}}</span>
            </v-sheet> <v-spacer></v-spacer>
          </v-layout>
          <v-sheet class="pa-2 ma-2 ">{{message.mensaje}}
          </v-sheet>
        </v-layout>
      </v-flex>
    </v-layout>
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
.cuadroMensaje{
  border-radius: 20px;
box-shadow: 2px 13px 14px -6px rgba(0,0,0,0.75);
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
