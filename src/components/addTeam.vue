<template>

    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn fab dark    color="indigo" v-on="on">
          <v-icon>fas fa-user-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Añadir Team</v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-text-field label="Nombre del equipo" v-model="nameTeam"></v-text-field>
            <v-divider></v-divider>
            <v-text-field label="Numero de jugadores" v-model="numberPlayers"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="green darken-1" flat @click="enviarTeam">Send</v-btn>
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
      nameTeam: '',
      numberPlayers: null
    }
  },
  methods: {
    enviarTeam () {
      const team = {
        name_team: this.nameTeam,
        number_players: this.numberPlayers
      }
      fire.db.collection('teams').add(team).then(() => {
        console.log('Este team a sido añadido')
      })
      this.dialog = false
    }
  }
}
</script>
