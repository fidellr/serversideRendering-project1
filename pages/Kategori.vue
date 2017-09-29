<template>
    <v-app>
        <v-container grid-list-xs>
            <v-layout align-center wrap>
                <v-flex xs10 offset-xs3>
                    <v-list-tile-title class="subheading black--text">
                        <b>Kategori</b>
                    </v-list-tile-title>
                    <br/>
                    <KategoriSub/>

                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>
<script>
import KategoriSub from '~/components/kategori/KategoriSub'
export default {
    components: {
        KategoriSub
    }
}
</script>
