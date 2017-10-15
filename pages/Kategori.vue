<template>
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
</template>
<script>
import KategoriSub from '~/components/kategori/KategoriSub'
export default {
    //  layout(context) {
    //     if (context.store.getters.GuruIsAuthenticated) {
    //         return 'teacher'
    //     } else if (context.store.getters.MuridIsAuthenticated) {
    //         return 'student'
    //     } else {
    //         return 'default'
    //     }
    // },
    components: {
        KategoriSub
    }
}
</script>
