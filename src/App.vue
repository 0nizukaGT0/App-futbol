<template>
<v-app>
  <v-content class="mx-4 mb-4">
        <Navbar />
    <router-view></router-view>
    <transition name="fade">
  <adminButton v-if="isAdmin"></adminButton>
</transition>

  </v-content>
</v-app>
</template>

<script>
import Navbar from './components/Navbar'
import adminButton from './components/adminButton'
export default {
  name: 'app',
  components: {
    Navbar, adminButton
  },
  computed: {
    isAdmin () {
      return this.$store.getters.isUserAdmin
    }
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
opacity: 0;
}
</style>
