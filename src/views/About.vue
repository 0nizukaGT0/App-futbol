<template>
<div class="about">
  <h2>Aqui es mi campo de pruebas</h2>
<addPlayer v-if="isAdmin"></addPlayer>
<addMatch v-if="isAdmin"></addMatch>
<addTeam v-if="isAdmin"></addTeam>
</div>
</template>
<script>

import addPlayer from '@/components/addPlayer'
import addMatch from '@/components/addMatch'
import addTeam from '@/components/addTeam'
export default {
  components: {addPlayer, addMatch, addTeam },
  computed: {
    isAdmin () {
      return this.$store.getters.isUserAdmin
    }
  }
}
</script>
