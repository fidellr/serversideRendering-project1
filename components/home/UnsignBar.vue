<template>
    <div>
        <!-- Sidebar -->
        <v-navigation-drawer 
        class="grey lighten-3" 
        persistent 
        clipped
        :mini-variant="miniVariant" 
        v-model="drawer"
        style="margin-top:65px;"
        >
            <v-list class="grey lighten-3 ">
                <!-- Home -->
                <v-list-tile router to="/" exact>
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Beranda
                    </v-list-tile-content>
                </v-list-tile>
                
                <!-- Home -->
                <!-- Kategori -->
                <v-list-tile router to="/kategori">
                    <v-list-tile-action>
                        <v-icon>class</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Kategori
                    </v-list-tile-content>
                </v-list-tile>
                
                <!-- Kategori -->
                <!-- Tentang -->
                <v-list-tile router to="/tentang">
                    <v-list-tile-action>
                        <v-icon>location_city</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Tentang
                    </v-list-tile-content>
                </v-list-tile>
                
                <!-- Tentang -->
                <!-- Panduan -->
                <v-list-tile router to="/panduan">
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
        <v-toolbar class="grey darken-3" fixed>
            <v-toolbar-side-icon class="white--text" @click="drawer = !drawer">
            </v-toolbar-side-icon>
            <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon class="white--text" v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
            <v-toolbar-title class="white--text" v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
                <v-text-field column align-center solo label="Cari..." class="search-bar" append-icon="search"></v-text-field>
            <v-spacer></v-spacer>

            <SignIn />
        </v-toolbar>
        <!-- Toolbar -->
    </div>
</template>

<script>
import SignIn from '~/components/Signin.vue'
export default {
    components: {
        SignIn
    },
    data() {
        return {
            // hover: false,
            drawer: true,
            miniVariant: false,
            clipped: false,
            title: 'brand.'

        }
    }
}
</script>
