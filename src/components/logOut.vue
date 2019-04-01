<template lang="html">
    <v-btn flat slot="activator" class="succes" @click="logOut">Log Out</v-btn>
</template>

<script>
import fire from '@/fb.js'
export default {
  methods: {
    logOut () {
      fire.auth.signOut().then(() => {
        console.log('user sign out')
      })
    }
  } }
</script>

<style lang="css" scoped>
</style>
