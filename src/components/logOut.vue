<template lang="html">
    <v-btn depressed slot="activator" class="succes" @click="logOut">Log Out</v-btn>
</template>

<script>
import fire from '@/fb.js'
export default {
  methods: {
    logOut () {
      fire.auth.signOut().then(() => {
        console.log('user sign out')
        this.$store.commit('userLogged', '')
      })
    }
  } }
</script>

<style lang="css" scoped>
</style>
