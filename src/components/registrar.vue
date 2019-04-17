<template>
<v-dialog max-width="390">
  <v-list-tile-title depressed slot="activator" class="succes">
    Sign up
  </v-list-tile-title>
  <v-card>
    <v-card-title class="headline">Sign Up</v-card-title>
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
      </v-form>
      <v-layout justify-end>
        <v-btn flat @click="close">Close</v-btn>
        <v-btn outline @click="enviarUser">Send</v-btn>
      </v-layout>
      <v-divider></v-divider>
      <v-card-title class="">You can also sign up with</v-card-title>
      <v-layout row wrap justify-space-between>
        <v-btn icon @click="googleAuth">
          <v-img src="https://image.flaticon.com/icons/png/512/281/281764.png"></v-img>
        </v-btn>
        <v-btn icon @click="githubAuth">
          <v-img src="https://image.flaticon.com/icons/svg/25/25231.svg"></v-img>
        </v-btn>
        <v-btn icon @click="facebookAuth">
          <v-img src="https://image.flaticon.com/icons/png/512/124/124010.png"></v-img>
        </v-btn>
        <v-btn icon @click="twitterAuth">
          <v-img src="https://ikaltours.com/wp-content/uploads/2018/10/twitter-round-logo-png-transparent-background-7.png"></v-img>
        </v-btn>
      </v-layout>
    </v-card-text>
  </v-card>
</v-dialog>
</template>

<script>
import fire from '@/fb.js'
export default {
  data() {
    return {
      pass: '',
      mail: '',
      user: ''
    }
  },
  methods: {
    enviarUser() {
      fire.auth.createUserWithEmailAndPassword(this.mail, this.pass)
        .then(res => {
          console.log(res)
          this.user = res.user.email
          this.$store.commit('userLogged', this.user)
        }).catch(function(error) {
          // Handle Errors here.
          console.log(error.code)
          console.log(error.message)
        })
    },
    googleAuth() {
      let provider = fire.providerGoogle
      fire.auth.signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken
        // The signed-in user info.
        var user = result.user
        console.log(`El user es ${user}, su token es ${token}`)
        // ...
      }).catch(function(error) {
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
    },
    githubAuth() {
      let provider = fire.providerGithub
      fire.auth.signInWithPopup(provider).then(function(result) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken
        // The signed-in user info.
        var user = result.user
        console.log(`El user es ${user}, su token es ${token}`)
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        console.log(`el error es  ${errorCode} el mensaje ${errorMessage} credencial ${credential} el email es ${email}`)
      })
    },
    facebookAuth() {
      let provider = fire.providerFacebook
      fire.auth.signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken
        // The signed-in user info.
        var user = result.user
        console.log(`El user es ${user}, su token es ${token}`)
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        console.log(`el error es  ${errorCode} el mensaje ${errorMessage} credencial ${credential} el email de error es ${email}`)
      })
    },
    twitterAuth() {
      let provider = fire.providerTwitter
      fire.auth.signInWithPopup(provider).then(function(result) {
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        var token = result.credential.accessToken
        var secret = result.credential.secret
        // The signed-in user info.
        var user = result.user
        console.log(`El user es ${user}, su token es ${token} tambien tiene un secret ${secret}`)
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        console.log(`el error es  ${errorCode} el mensaje ${errorMessage} credencial ${credential} el email de error es ${email}`)
      })
    }
  }
}
</script>
