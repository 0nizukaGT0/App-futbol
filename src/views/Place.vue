<template lang="html">
  <div>
    <v-card class="mt-5">
    <v-data-table
    :items="places"
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
  props: ['place'],
  computed: {
    places: function () {
      let partidos = this.$store.state.matches
      let lugar = this.$props.place
      console.log(partidos)
      let placesFiltrados = []
      for (const ubicacion of partidos) {
        if (ubicacion.place === lugar) { placesFiltrados.push(ubicacion) }
      }
      return placesFiltrados
    }
  }
}
</script>

<style lang="css" scoped>
</style>
