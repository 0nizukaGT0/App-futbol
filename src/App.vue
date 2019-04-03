<template>
<v-app>
  <v-content class="mx-4 mb-4">
        <Navbar />
    <router-view></router-view>
    <adminButton v-if="isAdmin"></adminButton>
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
