<template lang="html">
  <div>
    <v-card class="mt-5">
    <v-data-table
    :items="equipos"
    class="elevation-1"
    hide-actions
    hide-headers

  >
    <template v-slot:items="props">
      <td class="text-xs-right">{{ props.item.team1 }}</td>
      <td class="text-xs-right">{{ props.item.team2 }}</td>
      <td class="text-xs-right"><a href="props.item.url">{{ props.item.place }}</a></td>
      <td class="text-xs-right">{{ props.item.date.day}}/{{ props.item.date.month}}</td>
    </template>
  </v-data-table>
  </v-card>
  </div>
</template>

<script>
export default {
  props: ['team'],
  computed: {
    equipos: function () {
      let partidos = this.$store.state.matches
      let team = this.$props.team
      let equiposFiltrados = []
      for (const equipo of partidos) {
        if (equipo.team1 === team || equipo.team2 === team) { equiposFiltrados.push(equipo) }
      }
      return equiposFiltrados
    }
  }
}
</script>

<style lang="css" scoped>
</style>
