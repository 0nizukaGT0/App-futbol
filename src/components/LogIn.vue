<template lang="html">
  <v-dialog>
    <v-btn flat slot="activator" class="succes">Log In</v-btn>
    <v-card>
      <v-card-title>
      <v-form>
        <v-container>
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
        </v-container>
      </v-form>
      </v-card-title>

    </v-card>
  </v-dialog>

</template>

<script>
export default {}
</script>

<style lang="css" scoped>
</style>
