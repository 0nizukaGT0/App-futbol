<template>
<v-speed-dial v-model="fab" fixed :top="top" :bottom="bottom" :right="right" :left="left" :direction="direction" :open-on-hover="hover" :transition="transition">
  <template v-slot:activator>
    <v-btn v-model="fab" large color="blue darken-2" dark fab>
      <v-icon>fas fa-user-tie</v-icon>
      <v-icon>close</v-icon>
    </v-btn>
  </template>
  <!-- boton para añadir match -->
  <addMatch></addMatch>
  <!-- boton añadir equipo -->
  <addTeam></addTeam>
  <!-- boton añadir jugador -->
  <addPlayer></addPlayer>
</v-speed-dial>
</template>
<script>
import addMatch from '@/components/addMatch'
import addPlayer from '@/components/addPlayer'
import addTeam from '@/components/addTeam'
export default {
  components: {
    addMatch,
    addPlayer,
    addTeam
  },
  data: () => ({
    // Direccion de la animacion de despliegue
    direction: 'top',
    // Define si los botones ya vienen desplegados
    fab: false,
    //
    fling: false,
    // Define si seabre con solo hacer hover el elemento
    hover: false,
    //
    tabs: null,
    // Position of the button inside the parent element (recomended a parent element  with height and width defined)
    top: false,
    right: true,
    bottom: true,
    left: false,
    // Animacion X o Y (reverse) en la que los iconos se despliegan
    transition: 'slide-y-reverse-transition'
  }),

  computed: {
    activeFab () {
      switch (this.tabs) {
        case 'one':
          return {
            'class': 'purple',
            icon: 'account_circle'
          }
        case 'two':
          return {
            'class': 'red',
            icon: 'edit'
          }
        case 'three':
          return {
            'class': 'green',
            icon: 'keyboard_arrow_up'
          }
        default:
          return {}
      }
    }
  },

  watch: {
    top (val) {
      this.bottom = !val
    },
    right (val) {
      this.left = !val
    },
    bottom (val) {
      this.top = !val
    },
    left (val) {
      this.right = !val
    }
  }
}
</script>
<style>
/* This is for documentation purposes and will not be needed in your application */
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
</style>
