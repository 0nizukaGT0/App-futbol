<template>
<div>
  <h1>Esta sera el home2</h1>
  <!-- <img src="./../../public/img/imagenes/balon.jpg" alt=""> -->
  <table>
    <th>fecha</th>
    <th>lugar</th>
    <th>team</th>
    <tr v-for="l in partidos" :key="l.date">
      <td>{{l.date}}</td>
      <td>{{l.place}}</td>
      <td>{{l.teams}}</td>
    </tr>
  </table>

</div>
</template>
<script>

export default {
  components: {

  },
  computed: {
    partidos () {
      return this.$store.state.schedule
    }
  }
}
</script>
