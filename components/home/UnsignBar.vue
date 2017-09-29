<template>
    <div>
        <!-- Sidebar -->
        <v-navigation-drawer class="blue-grey lighten-2" persistent clipped :mini-variant="miniVariant" v-model="drawer" enable-resize-watcher>
            <v-list class="blue-grey lighten-2 ">
                <!-- Home -->
                <v-list-tile nuxt to="/" exact>
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Beranda
                    </v-list-tile-content>
                </v-list-tile>
                
                <!-- Home -->
                <!-- Kategori -->
                <v-list-tile nuxt to="/kategori">
                    <v-list-tile-action>
                        <v-icon>class</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Kategori
                    </v-list-tile-content>
                </v-list-tile>
                
                <!-- Kategori -->
                <!-- Tentang -->
                <v-list-tile nuxt to="/tentang">
                    <v-list-tile-action>
                        <v-icon>location_city</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Tentang
                    </v-list-tile-content>
                </v-list-tile>
                
                <!-- Tentang -->
                <!-- Panduan -->
                <v-list-tile nuxt to="/panduan">
                    <v-list-tile-action>
                        <v-icon>collections_bookmark</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Panduan
                    </v-list-tile-content>
                </v-list-tile>
                
                <!-- Panduan -->
            </v-list>

        </v-navigation-drawer>
        <!-- Sidebar -->

        <!-- Toolbar -->
        <v-toolbar class="green accent-1" fixed>
            <v-toolbar-side-icon @click.stop="drawer = !drawer">
            </v-toolbar-side-icon>
            <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-layout column align-center>
                <v-text-field solo label="Saya mau belajar..." class="search-bar" append-icon="search"></v-text-field>
            </v-layout>
            <v-spacer></v-spacer>

            <SignIn />
        </v-toolbar>
        <!-- Toolbar -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SignIn from '~/components/Signin.vue'
export default {
    components: {
        SignIn
    },
    data() {
        return {
            hover: false,
            drawer: true,
            miniVariant: false,
            title: 'Brand'

        }
    }
}
</script>
