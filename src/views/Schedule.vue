<template lang="html">
  <div>
    <h1>Schedule</h1>
<v-card>
  <v-card-title>
   Matches
   <v-spacer></v-spacer>
   <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
 </v-card-title>
 <v-card-text>
  <v-data-table :headers="tableHeaders" :items="matches" :search="search">
      <!-- Aqui pintamos las celdas de la tabla -->
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.team1 }}</td>
        <td class="text-xs-center">{{ props.item.team2 }}</td>
        <td class="text-xs-center"><a :href="props.item.url">{{ props.item.place }}</a></td>
        <td class="text-xs-center">{{ props.item.date.day }}/ {{ props.item.date.month }}</td>
      </template>
      <!-- Aqui va la alerta que saltara si la busqueda fracasa -->
    <template v-slot:no-data>
      <v-alert v-slot:no-results :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
        </template>

  </v-data-table>
  </v-card-text>
</v-card>
  </div>

</template>

<script>
export default {
  data () {
    return {
      search: '',
      tableHeaders: [
        {
          text: 'Team Local',
          align: 'center',
          value: 'team1'
        },
        {
          text: 'Team Rival',
          align: 'center',
          value: 'team2'
        },
        {
          text: 'Place',
          align: 'center',
          value: 'place'
        },
        {
          text: 'Date',
          align: 'center',
          sortable: false,
          value: 'date'
        }
      ]
    }
  },
  computed: {
    matches () { return this.$store.state.matches }
  }
}
</script>
