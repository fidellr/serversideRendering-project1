import Vuex from "vuex";
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
const store = () =>
  new Vuex.Store({
    state: {
      sidebar: false,
      kategori: [
        {
          title: "Teknik",
          subkategori: [
            { nama: "Arsitektur", to: "" },
            { nama: "Teknik Bioproses", to: "" },
            { nama: "Teknik Elektro", to: "" },
            { nama: "Teknik Industri", to: "" },
            { nama: "Informatika", to: "" },
            { nama: "Teknik Kimia", to: "" },
            { nama: "Teknik Kimia", to: "" },
            { nama: "Teknik Lingkungan", to: "" },
            { nama: "Teknik Metalurgi & Material", to: "" },
            { nama: "Teknik Mesin", to: "" },
            { nama: "Teknik Lingkungan", to: "" }
          ],
          foto: "./assets/img/teknik/teknik-icon.png"
        },
        {
          title: "Bisnis",
          subkategori: [
            { nama: "Kewirausahaan", to: "" },
            { nama: "Manajemen", to: "" }
          ],
          foto: "./assets/img/bisnis/business-icon.png"
        },
        {
          title: "Ekonomi",
          subkategori: [
            { nama: "Teori & Praktek Ekonomi", to: "" },
            { nama: "Akuntansi", to: "" },
            { nama: "Keuangan", to: "" },
            { nama: "Perpajakan", to: "" }
          ],
          foto: "./assets/img/ekonomi/ekonomi-icon.png"
        },
        {
          title: "Desain & Seni",
          foto: "./assets/img/desain-seni/desain-seni.png"
        }
      ],
      users: {},
      token: null,
      user: null,
      snackbarWrongRoleMurid: false,
      snackbarWrongRoleGuru: false,
      loading: false,
      fullKategori: [
        {
          title: "Teknik",
          subkategori: [
            {
              nama: "Arsitektur",
              to: ""
            },
            {
              nama: " Bioproses",
              to: ""
            },
            {
              nama: " Elektro",
              to: ""
            },
            {
              nama: " Industri",
              to: ""
            },
            {
              nama: "Informatika",
              to: ""
            },
            {
              nama: " Kimia",
              to: ""
            },
            {
              nama: " Lingkungan",
              to: ""
            },
            {
              nama: " Metalurgi & Material",
              to: ""
            },
            {
              nama: " Mesin",
              to: ""
            },
            {
              nama: " Lingkungan",
              to: ""
            }
          ]
        },
        {
          title: "Bisnis",
          subkategori: [
            {
              nama: "Kewirausahaan",
              to: ""
            },
            {
              nama: "Manajemen",
              to: ""
            }
          ]
        },
        {
          title: "Ekonomi",
          subkategori: [
            {
              nama: "Teori & Praktek Ekonomi",
              to: ""
            },
            {
              nama: "Akuntansi",
              to: ""
            },
            {
              nama: "Keuangan",
              to: ""
            },
            {
              nama: "Perpajakan",
              to: ""
            }
          ]
        },
        {
          title: "Desain & Seni",
          subkategori: [
            {
              nama: "Musik",
              to: ""
            },
            {
              nama: "Fine Art",
              to: ""
            },
            {
              nama: "Desain Grafis",
              to: ""
            }
          ]
        }
      ]
    },
    actions,
    mutations,
    getters
  });
export default store;
