<template>
<v-dialog>
  <v-btn flat slot="activator" class="succes">
    <v-icon>fab fa-google</v-icon>
  </v-btn>
  <v-card>
    <v-card-text>
      <v-form>
        <v-layout column>
          <v-flex>
            <v-text-field label="Email" v-model="mail"></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field label="Password" v-model="pass"></v-text-field>
          </v-flex>
        </v-layout>
        <v-btn color="succes" @click="enviarUser">Send</v-btn>
      </v-form>
    </v-card-text>

  </v-card>
</v-dialog>
</template>

<script>
import fire from '@/fb.js'
export default {
  data () {
    return {
      pass: '',
      mail: ''
    }
  },
  methods: {
    enviarUser () {
      fire.auth.createUserWithEmailAndPassword(this.mail, this.pass)
        .then(res => console.log(res)).catch(function (error) {
        // Handle Errors here.
          console.log(error.code)
          console.log(error.message)
        })
    }
  }
}
</script>

<style lang="css" scoped>

</style>
