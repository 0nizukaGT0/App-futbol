<template lang="html">
  <v-layout row justify-center>
   <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
     <template v-slot:activator="{ on }">
       <v-btn icon outline color="white" dark v-on="on"><v-icon>assignment_ind</v-icon></v-btn>
     </template>
     <v-card>
       <v-toolbar dark color="primary">
         <v-btn icon dark @click="dialog = false">
           <v-icon>close</v-icon>
         </v-btn>
         <v-toolbar-title>Settings</v-toolbar-title>
         <v-spacer></v-spacer>
         <v-toolbar-items>
           <v-btn dark flat @click="dialog = false">Save</v-btn>
         </v-toolbar-items>
       </v-toolbar>
      <code>Aqui pondremos el formulario con vuetify que envia datos al firestore</code>
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
