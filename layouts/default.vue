<template>
    <v-app>
        <unsign-bar v-if="!GuruIsAuthenticated && !MuridIsAuthenticated"></unsign-bar>
        <student-bar v-if="MuridIsAuthenticated"></student-bar>
        <teacher-bar v-if="GuruIsAuthenticated"></teacher-bar>
        <br/>
        <br/>
        <br/>
        <br/>
        <nuxt/>

    </v-app>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import UnsignBar from '~/components/home/UnsignBar.vue'
import StudentBar from '~/components/home/StudentBar.vue'
import TeacherBar from '~/components/home/TeacherBar.vue'
export default {
    components: {
        UnsignBar,
        StudentBar,
        TeacherBar
    },
    data() {
        return {
            hover: false,
            drawer: true,
            miniVariant: false,
            title: 'Brand'

        }
    },
    computed: {
        ...mapGetters(['GuruIsAuthenticated', 'MuridIsAuthenticated']),

    }
}
</script>
<style scoped>
>>>.list__tile--active {
    background-color: rgba(0, 0, 0, 0.2);
    color: black;
}

>>>.navigation-drawer>.list .list__tile--active>:first-child .icon {
    color: inherit !important;
}
</style>