<template>
    <v-container grid-list-xs>
        <v-layout column align-center wrap>
            <v-flex xs10 offset-xs3>
                <v-card>
                    <v-card-title>
                        <h3>ini halaman murid</h3>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
// import Teacher from '~/components/teachers_page'
import { mapGetters } from 'vuex'
export default {
    middleware: 'authenticated',
    mounted() {
    },
    computed: {
    }
}
</script>

<style>

</style>
