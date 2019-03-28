<template lang="html">
  <v-dialog>
    <v-btn flat slot="activator" class="succes">Log In</v-btn>
    <v-card>
      <v-card-text>
      <v-form>

        <v-layout column>
          <v-flex >
          <v-text-field
            label="Email" v-model="mail"
          ></v-text-field>
        </v-flex>
        <v-flex>
        <v-text-field label="Password" v-model="pass"></v-text-field>
      </v-flex>
      <v-btn @click="logIn">Log In</v-btn>
      </v-layout>

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
      mail: '',
      pass: ''
    }
  },
  methods: {
    logIn () {
      fire.auth.signInWithEmailAndPassword(this.mail, this.pass)
        .then(cred => {
          console.log(cred)
        })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
