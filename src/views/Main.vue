<template>
  <v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app clipped>
        <v-list dense>
          <v-list-item :to="item.link" v-for="(item, i) in itemList" :key="i" link>
            <v-list-item-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{item.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar app clipped-left color="blue-grey" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="logOut()" icon>
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </v-app-bar>
  
      <v-main>
        <v-container class="pa-4" fluid>

          <router-view />
          
        </v-container>
      </v-main>
  
      <v-footer color="blue-grey" app dark>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-app>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { logOut } from '../utils/auth';
import router from '@/router';

@Component
export default class Main extends Vue {
  drawer = null;
  logOut = logOut;

  itemList = [
    { icon: 'mdi-home', text: 'Home', link: '/home'},
    { icon: 'mdi-view-dashboard', text: 'Users', link: '/users'},
    { icon: 'mdi-cog', text: 'About', link: '/about'},
  ];

  created(): void {
    this.$vuetify.theme.dark = false;
  }

  toSignIn(): void {
    router.replace('/sign-in');
  }

}
</script>
