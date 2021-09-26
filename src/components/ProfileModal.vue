<template>
  <v-dialog v-model="dialog" @click:outside="close()" max-width="640">
    <v-card>

      <v-card-title class="text-h5">
        Profile
      </v-card-title>

      <v-card-text class="pb-12">

        <div class="profile-container">
          <div class="profile-container__avatar">
            <div class="profile-container__img" :style="`background-image: url(${hasAvatar ? 'uploads/' + user.avatar : 'img/no-avatar.png'});`"></div>
          </div>
          <div class="profile-container__info">
            <h3>Information</h3>
            <v-divider class="my-2"></v-divider>

            <div>
              <div class="profile-container__row">
                <div class="profile-container__row_name">First Name</div>
                <div class="profile-container__row_val">{{user.firstName}}</div>
              </div>

              <div class="profile-container__row">
                <div class="profile-container__row_name">Last Name</div>
                <div class="profile-container__row_val">{{user.lastName}}</div>
              </div>

              <div class="profile-container__row">
                <div class="profile-container__row_name">Birth Date</div>
                <div class="profile-container__row_val">{{user.birthDate}}</div>
              </div>
            </div>

            <v-divider class="my-4"></v-divider>

            <div>
              <div class="profile-container__row">
                <div class="profile-container__row_name">Username</div>
                <div class="profile-container__row_val">{{user.username}}</div>
              </div>

              <div class="profile-container__row">
                <div class="profile-container__row_name">E-mail</div>
                <div class="profile-container__row_val">{{user.email}}</div>
              </div>
            </div>

          </div>
        </div>

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

.profile-container {
  display: flex;
  flex-wrap: wrap;

  &__avatar {
    flex: 0 0 200px;

    @media screen and (max-width: 600px) {
      flex: 0 0 100%;
    }
  }

  &__info {
    flex: 1 1 auto;
    padding-left: 16px;

    @media screen and (max-width: 600px) {
      flex: 0 0 100%;
      padding-left: 0;
      padding-top: 16px;
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;

    &_name {
      flex: 0 0 140px;
    }

    &_val {
      flex: 1 1 auto;
      text-align: end;
      overflow: auto;
    }

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  &__img {
    width: 200px;
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media screen and (max-width: 600px) {
      width: 150px;
      height: 150px;
    }

    margin: 0 auto;
  }
}

</style>
