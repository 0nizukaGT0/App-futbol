<template>

  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on }">
      <v-btn fab  dark  small  color="red" v-on="on">
        <v-icon>fas fa-flag-checkered</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">Add Player</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field v-model="name" :rules="rules" :counter="10" label="Name"></v-text-field>
          <v-divider></v-divider>
          <v-text-field v-model="last_name" :rules="rules" :counter="10" label="Last name"></v-text-field>
          <v-divider></v-divider>
          <v-text-field v-model="birthday" :rules="rules" :counter="10" label="Birthday"></v-text-field>
          <v-divider></v-divider>
          <v-text-field v-model="gender" label="Gender"></v-text-field>
          <v-divider></v-divider>
          <v-text-field v-model="grade" label="Grade"></v-text-field>
          <v-divider></v-divider>
          <v-text-field v-model="zip" label="Zip" :counter="5"></v-text-field>
          <v-divider></v-divider>
          <v-text-field v-model="street" label="Street"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat @click="dialog = false">Close</v-btn>
        <v-btn color="green darken-1" flat @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>
<script>
export default {
  data () {
    return {
      dialog: false,
      rules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      birthday: '',
      gender: '',
      grade: null,
      last_name: '',
      name: '',
      player_id: '',
      street: '',
      zip: null
    }
  }
}
</script>
