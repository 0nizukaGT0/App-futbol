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
  <article>
    <div class="iframe">
      <div class="iframe1">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11970.696548781365!2d2.137218693518066!3d41.402882621710724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4986ac8c4d46f%3A0x98b9b380b7d46593!2sCementerio+de+Sarri%C3%A0!5e0!3m2!1ses!2ses!4v1549034780743"
          width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
      <div class="iframe2">
        <p>August 4</p>
        <p class="sangria">NYSL Fundraiser</p>
      </div>
    </div>
    <div class="iframe">
      <div class="iframe1">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.5891136499076!2d2.1713070510628842!3d41.38301097916291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f79f7fa1e9%3A0x2ebe09bacaf33820!2sCarrer+de+la+Portaferrissa%2C+22%2C+08002+Barcelona!5e0!3m2!1ses!2ses!4v1549034836964"
          width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
      <div class="iframe2">
        <p>August 16</p>
        <p class="sangria">Season Kick-off: Meet the teams</p>
      </div>
    </div>
    <div class="iframe">
      <div class="iframe1">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.2354878170536!2d2.152478951062433!3d41.36896817916415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a270290b5fdb%3A0x1fd4c3ba6d736d8c!2sAv.+dels+Montanyans%2C+08038+Barcelona!5e0!3m2!1ses!2ses!4v1549034875253"
          width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
      <div class="iframe2">
        <p>September 1</p>
        <p class="sangria">First Game of the Season (Check Game Schedule for details)</p>
      </div>
    </div>
  </article>
</div>
</template>
<script>
export default {
  components: {},
  computed: {
    partidos () {
      return this.$store.state.schedule
    }
  }
}
</script>
