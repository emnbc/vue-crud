<template>
  <v-app id="inspire">

      <main-menu ref="menu" />

      <v-app-bar app clipped-left color="blue-grey" dark>
        <v-app-bar-nav-icon @click.stop="toggleMenu()"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="ma-2" text icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
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
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { logOut } from '../utils/auth';
import MainMenu from '@/components/MainMenu.vue'

@Component({
  components: {'main-menu': MainMenu}
})
export default class Main extends Vue {
  logOut = logOut;

  created(): void {
    this.$vuetify.theme.dark = false;
  }

  toggleMenu(): void {
    (this.$refs.menu as MainMenu).toggleMenu();
  }

}
</script>
