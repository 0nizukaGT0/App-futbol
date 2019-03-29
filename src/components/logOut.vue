<template lang="html">
  <v-dialog>
    <v-btn flat slot="activator" class="succes" @click="logOut">Log Out</v-btn>
    <v-card>
      <v-card-text>
      <v-form>
        <v-layout column>
          <v-flex >
          <v-text-field
            label="Email"
          ></v-text-field>
        </v-flex>
        <v-flex>
        <v-text-field label="Password"></v-text-field>
      </v-flex>
      </v-layout>

      </v-form>
    </v-card-text>

    </v-card>
  </v-dialog>
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
}}
</script>

<style lang="css" scoped>
</style>
