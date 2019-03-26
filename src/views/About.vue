<template>
<div class="about">
  <code>Estos son componentes que pasare al navigation drawer tenog que acabarlos</code>
<Formulario></Formulario>
<Contact></Contact>
<NyslRules></NyslRules>
<addPlayer></addPlayer>
<addMatch></addMatch>
<addTeam></addTeam>
</div>
</template>
<script>
import Formulario from '@/components/Formulario'
import Contact from '@/components/Contact'
import NyslRules from '@/components/Nysl-Rules'
import addPlayer from '@/components/addPlayer'
import addMatch from '@/components/addMatch'
import addTeam from '@/components/addTeam'
export default {
  components: { Formulario, Contact, NyslRules, addPlayer, addMatch, addTeam }
}
</script>
