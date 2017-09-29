<template>
    <!-- <Teacher/> -->
    <v-app>
        <v-card>
            <v-card-title>
                <h3>ini halaman guru</h3>
            </v-card-title>
        </v-card>
    </v-app>
</template>

<script>
// import Teacher from '~/components/teachers_page'
import { mapGetters } from 'vuex'
export default {
    middleware: 'authenticated',
    mounted() {
        // const { token, secret } = extractInfoFromHash()
        // if (!checkSecret(secret) || !token) {
        //     console.error('something happened with the sign in request')
        // }
        // setToken(token)
        
    },
    computed: {
        ...mapGetters(['loggedUser'])
    }
}
</script>

<style>

</style>
