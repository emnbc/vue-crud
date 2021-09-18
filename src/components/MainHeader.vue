<template>
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
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { logOut } from '../utils/auth';

@Component
export default class MainHeader extends Vue {
@Prop() toggleMenu!: () => void;

logOut = logOut;

}
</script>
