<template>
<v-layout row justify-center>
  <v-btn color="primary" dark @click.stop="dialog = true">
    Contacto
  </v-btn>

  <v-dialog v-model="dialog" max-width="290">
    <v-card>
      <v-card-text>
        <p>   <v-chip dark small color="grey" @click="dialog = false">
            <v-icon>close</v-icon>
          </v-chip>    Pleae email us at <a href="mailto:nysl@chisccer.org?subject=Consulta">
            nysl@chisccer.org</a></p>
        <p>We will reply your email as soon as we can</p>
      </v-card-text>
    </v-card>
  </v-dialog>
</v-layout>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  }
}
</script>
