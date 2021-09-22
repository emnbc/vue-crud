<template>
  <v-dialog v-model="dialog" @click:outside="close()" max-width="480">
    <v-card>

      <v-card-title class="text-h5">
        Profile
      </v-card-title>

      <v-card-text>

        <div class="profile-img" :style="`background-image: url(${hasAvatar ? 'uploads/' + user.avatar : 'img/no-avatar.png'});`"></div>

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
import { AuthModule } from '@/store/modules/auth';
import { User } from '@/models/user';

@Component
export default class ProfileModal extends Vue {

  @Prop() dialog!: boolean;
  @Prop() close!: () => void;

  get user(): User {
    return AuthModule.user;
  }

  get hasAvatar() {
    return !!this.user.avatar;
  }

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.profile-img {
  width: 300px;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
