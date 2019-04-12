<template>
<div>
  <v-card flat>

    <message ></message>
    <v-spacer></v-spacer>
    <v-layout row align-content-center>
    <div class="enterMessage">
        <v-textarea
     box
     label="Your message here ..."
     auto-grow
       rows="1"
         v-model="currentMessage"

   ></v-textarea>
        <v-btn  fab dark large color="cyan" :disabled="sendMessageDisable" @click="sendMessage">
          <v-icon>send</v-icon>
        </v-btn>
    </div>
    </v-layout>
  </v-card>

</div>
</template>
<script>
import message from '@/components/message'
import fire from '@/fb.js'
export default {
  components: {
    message
  },
  data () {
    return {
      currentMessage: ''
    }
  },
  computed: {
    currentUser: function () {
      return this.$store.state.currentUser
    },
    sendMessageDisable: function () {
      if (this.currentMessage.length < 1) {
        return true
      }
      return false
    },
    fecha: function () {
      let fechaActual = {
        hora: new Date().getHours(),
        minuto: new Date().getMinutes(),
        dia: new Date().getDate(),
        mes: new Date().getMonth() + 1
      }
      return fechaActual
    }
  },
  methods: {
    sendMessage () {
      const message = {
        user: this.currentUser,
        mensaje: this.currentMessage,
        date: {
          hora: new Date().getHours(),
          minuto: new Date().getMinutes(),
          dia: new Date().getDate(),
          mes: new Date().getMonth() + 1
        }
      }
      fire.db.collection('chats').add(message).then(() => {
        console.log('Este partido a sido añadido')
      })
    }
  }

}
</script>
<style>
  .enterMessage{
    display: flex;
    width: 100%
  }
</style>
