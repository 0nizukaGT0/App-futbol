<template>
<v-layout row justify-center>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Añadir Match</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">Añadir Match</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field v-model="team1" :rules="rules" :counter="10" label="Team 1"></v-text-field>
           <v-divider></v-divider>
          <v-text-field v-model="team2" :rules="rules" :counter="10" label="Team 2"></v-text-field>
           <v-divider></v-divider>
          <v-text-field v-model="place" :rules="rules" :counter="10" label="Place"></v-text-field>
           <v-divider></v-divider>
          <v-text-field v-model="date.day"  label="Day"></v-text-field>
           <v-divider></v-divider>
          <v-text-field v-model="date.month"  label="Month"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat @click="dialog = false">Close</v-btn>
        <v-btn color="green darken-1" flat @click="enviarMatch">Send</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-layout>
</template>
<script>
import db from './../fb.js'
export default {
  data () {
    return {
      dialog: false,
      valid: true,
      rules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      team1: '',
      team2: '',
      place: '',
      date: {
        day: null,
        month: null
      }
    }
  },
  methods: {
    enviarMatch () {
      alert('hola2')
      const match = {
        team1: this.team1,
        team2: this.team2,
        place: this.place,
        date: this.date
      }
      db.collection('matches').add(match).then(() => {
        console.log('Este partido a sido añadido')
      })
    },
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
      console.log('hola')
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>
