<template>
<div class="about">
  <code>Estos son componentes que pasare al navigation drawer tenog que acabarlos</code>
<Formulario></Formulario>
<Contact></Contact>
<NyslRules></NyslRules>
<addPlayer></addPlayer>
<addMatch></addMatch>
<addTeam></addTeam>
<v-btn v-on:click="state">click</v-btn>
</div>
</template>
<script>
import Formulario from '@/components/Formulario'
import Contact from '@/components/Contact'
import NyslRules from '@/components/Nysl-Rules'
import addPlayer from '@/components/addPlayer'
import addMatch from '@/components/addMatch'
import addTeam from '@/components/addTeam'
import fire from '@/fb.js'
export default {
  components: { Formulario, Contact, NyslRules, addPlayer, addMatch, addTeam },
  methods: {
    state () {
      console.log('hola')
      fire.auth.signOut().then(() => {
        console.log('user sign out')
      })
    }
  }
}
</script>
