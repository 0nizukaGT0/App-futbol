<template>
<v-app>
  <v-content class="mx-4 mb-4">
    <Navbar />
    <router-view></router-view>

  </v-content>
</v-app>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  },
  computed: {
    isAdmin () {
      return this.$store.getters.isUserAdmin
    }
  }
}
</script>
