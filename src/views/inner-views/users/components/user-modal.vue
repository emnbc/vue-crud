<template>
    <v-dialog v-model="dialog" @click:outside="close()" max-width="480">
      <v-card>
        <v-form @submit.prevent="submit">

          <v-card-title class="text-h5">
            <span v-if="user.id">Edit User</span>
            <span v-if="!user.id">Create User</span>
          </v-card-title>

          <v-card-text>

                <v-text-field label="First Name"
                              name="firstName"
                              type="text"
                              v-model="user.firstName"
                              autocomplete="off"></v-text-field>

                <v-text-field label="Last Name"
                              name="lastName"
                              type="text"
                              v-model="user.lastName"
                              autocomplete="off"></v-text-field>

          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="close()">
              Cancel
            </v-btn>

            <v-btn color="green darken-1" text type="submit">
              <span v-if="user.id">Edit</span>
              <span v-if="!user.id">Create</span>
            </v-btn>
          </v-card-actions>

        </v-form>
      </v-card>
    </v-dialog>

</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { UsersModule } from '@/store/modules/users';
import { User } from '@/models/user';

@Component
export default class UserModal extends Vue {

    @Prop() dialog!: boolean;
    @Prop() user!: User;
    @Prop() close!: () => void;

    submit() {
      this.close();
    }

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>