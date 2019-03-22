<template>
<v-app>
  <v-content class="mx-4 mb-4">
    <router-view></router-view>
  </v-content>
  <Navbar />
</v-app>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  },
  data () {
    return {}
  }
}
</script>
