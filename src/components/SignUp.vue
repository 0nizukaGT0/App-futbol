<template>
<v-dialog>
  <v-btn depressed slot="activator" class="succes">
    Sign up
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
        <v-btn icon @click="googleAuth">
          <v-img src="https://image.flaticon.com/icons/png/512/281/281764.png"></v-img>
        </v-btn>
        <v-btn icon>
          <v-img src="https://image.flaticon.com/icons/svg/25/25231.svg"></v-img>
        </v-btn>
        <v-btn icon>
          <v-img src="https://image.flaticon.com/icons/png/512/124/124010.png"></v-img>
        </v-btn>
        <v-btn icon>
          <v-img src="https://ikaltours.com/wp-content/uploads/2018/10/twitter-round-logo-png-transparent-background-7.png"></v-img>
        </v-btn>
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
      mail: '',
      user: ''
    }
  },
  methods: {
    enviarUser () {
      fire.auth.createUserWithEmailAndPassword(this.mail, this.pass)
        .then(res => {
          console.log(res)
          this.user = res.user.email
          this.$store.commit('userLogged', this.user)
        }).catch(function (error) {
          // Handle Errors here.
          console.log(error.code)
          console.log(error.message)
        })
    },
    googleAuth () {
      let provider = fire.providerGoogle
      fire.auth.signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken
        // The signed-in user info.
        var user = result.user
        console.log(`El user es ${user}, su token es ${token}`)
        // ...
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        // var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        // ...
        console.log(`el error es  ${errorCode} el mensaje ${errorMessage} credencial ${credential}`)
      })
    }
  }
}
</script>
