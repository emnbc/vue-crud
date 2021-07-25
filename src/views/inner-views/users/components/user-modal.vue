<template>
    <v-dialog v-model="dialog" @click:outside="close()" max-width="480">
      <v-card>
        <v-card-title class="text-h5">
          Title
        </v-card-title>

        <v-card-text>
          Card text.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="close()">
            Disagree
          </v-btn>

          <v-btn color="green darken-1" text @click="close()">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { UsersModule } from '@/store/modules/users';

@Component
export default class UserModal extends Vue {

    @Prop() dialog!: boolean;
    @Prop() close!: () => void;
 
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>