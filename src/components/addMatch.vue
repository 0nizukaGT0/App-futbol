<template>

  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on }">
      <v-btn fab dark large color="green" v-on="on">
        <v-icon>fas fa-futbol</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">Añadir Match</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field v-model="team1" :rules="rules" :counter="25" label="Team 1"></v-text-field>
          <v-divider></v-divider>
          <v-text-field v-model="team2" :rules="rules" :counter="25" label="Team 2"></v-text-field>
          <v-divider></v-divider>
          <v-text-field v-model="place" :rules="rules" :counter="50" label="Place"></v-text-field>
          <v-divider></v-divider>
          <v-select label="Day" :items="dias" v-model="date.day"></v-select>
          <v-divider></v-divider>
          <v-select label="Month" :items="meses" v-model="date.month"></v-select>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat @click="dialog = false">Close</v-btn>
        <v-btn color="green darken-1" flat @click="enviarMatch">Send</v-btn>
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
      const match = {
        team1: this.team1,
        team2: this.team2,
        place: this.place,
        date: this.date
      }
      fire.db.collection('matches').add(match).then(() => {
        console.log('Este partido a sido añadido')
      })
      this.dialog = false
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
  },
  computed: {
    dias () {
      let totalDays = []
      for (let i = 1; i < 32; i++) {
        totalDays.push(i)
      }
      return totalDays
    },
    meses () {
      let allMonths = []
      for (var i = 1; i < 13; i++) {
        allMonths.push(i)
      }
      return allMonths
    }
  }
}
</script>
