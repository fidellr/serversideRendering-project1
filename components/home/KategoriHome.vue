<template>
      <v-container fluid grid-list-md>
        <v-layout wrap>
          <v-flex  v-for="kategori in kategoriHome" :key="kategori.title" class="text-xs-center" grow>
            <v-spacer></v-spacer>
              <v-card style="width:200px;" hover>
              <v-card-media :src="kategori.foto" height="200px" style="border-radius:59px; filter:blur(2px);">
              </v-card-media>
              <v-card class="grey lighten-3">
              <v-btn class="text-xs-center" flat nuxt to="/kategori">{{kategori.title}}</v-btn>
              </v-card>
              </v-card>
          </v-flex>
      </v-layout>
     </v-container>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters({
          kategoriHome:'kategoriHome'
        })
        
    }
}
</script>


