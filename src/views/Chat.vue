<template>
<div >
  <h2>Aqui desplegaremos los mensajes de los usuarios</h2>
<v-card>
  <message></message>
<v-text-field v-model="currentMessage" label="Message.."></v-text-field>
<v-btn flat @click="sendMessage">send</v-btn>
</v-card>

</div>
</template>
<script>
import message from '@/components/message'
import fire from '@/fb.js'
export default {
  components: { message },
  data () {
    return {
      currentMessage: ''
    }
  },
  computed: {
    currentUser: function () {
      return this.$store.state.currentUser
    }
  },
  methods: {
    sendMessage () {
      const message = {
        user: this.currentUser,
        mensaje: this.currentMessage
      }
      fire.db.collection('chats').add(message).then(() => {
        console.log('Este partido a sido añadido')
      })
    }
  }

}
</script>
