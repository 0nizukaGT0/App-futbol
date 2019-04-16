<template lang="html">
    <v-list-tile-title @click="logOut">
Log Out
</v-list-tile-title>
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
