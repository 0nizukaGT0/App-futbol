<template lang="html">
  <v-dialog>
    <v-btn small color="white" slot="activator" >Sign up</v-btn>
    <v-card>
      <v-card-title class="headline">Register</v-card-title>
      <v-card-text>
      <v-form>
        <v-layout column>
          <v-flex >
          <v-text-field
            label="Email"
          ></v-text-field>
        </v-flex>
        <v-flex>
        <v-text-field label="Password"></v-text-field>
      </v-flex>
      </v-layout>
      </v-form>
    </v-card-text>

    </v-card>
  </v-dialog>

</template>
