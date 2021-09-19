<template>
  <v-dialog v-model="dialog" @click:outside="close()" max-width="480">
    <v-card>

      <v-card-title class="text-h5">
        
      </v-card-title>

      <v-card-text>

        Profile page

      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn text @click="close()">
          Close
        </v-btn>
  
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ProfileModal extends Vue {

  @Prop() dialog!: boolean;
  @Prop() close!: () => void;

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
