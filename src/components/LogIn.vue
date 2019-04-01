<template lang="html">
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn flat v-on="on">Log in</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Log In</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Email" v-model="mail"></v-text-field>
            <v-text-field label="Password" v-model="pass"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" flat @click="logIn">Log In</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import fire from '@/fb.js'
export default {
  data () {
    return {
      dialog: false,
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
      this.dialog = false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
