<template lang="html">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-list-tile-title v-on="on">Log in</v-list-tile-title>
      </template>
      <v-card>
        <v-card-title class="headline">Log In</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Email" v-model="mail"></v-text-field>
            <v-text-field type="password" label="Password" v-model="pass"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="disagree">Disagree</v-btn>
          <v-btn color="green darken-1" flat @click="logIn">Log In</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import fire from '@/fb.js'
export default {
  data () {
    return {
      dialog: false,
      mail: '',
      pass: '',
      user: ''
    }
  },
  methods: {
    logIn () {
      fire.auth.signInWithEmailAndPassword(this.mail, this.pass)
        .then(cred => {
          console.log(cred)
          this.user = cred.user.email
          this.$store.commit('userLogged', this.user)
        })
      this.dialog = false
    },
    disagree () {
      this.dialog = false
      this.mail = ''
      this.pass = ''
    }
  }
}
</script>

<style lang="css" scoped>
</style>
