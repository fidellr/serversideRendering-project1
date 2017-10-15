export default {

    // ambilProfileUser(state) {
    //   let ambilProf = state.users.map(user => {
    //     let formattedCurrency = user.saldo.toLocaleString();
    //     return {
    //       id: user.id,
    //       firstName: user.firstname,
    //       lastName: user.lastname,
    //       sebagai: user.sebagai,
    //       userName: user.username,
    //       displayPicture: user.display_picture,
    //       saldoUser: formattedCurrency
    //     };
    //   });
    //   return ambilProf;
    // },
    ambilFullKategori(state) {
        let ambilKategori = state.fullKategori.map(kategori => {
            let Subkategori = kategori.subkategori.map(sub => {
                return {
                    Nama: sub.nama
                };
            });

            return {
                title: kategori.title,
                subKategori: {
                    nama: Subkategori.map(sub => sub.Nama)
                }
            };
        });
        return ambilKategori;
    },
    GuruIsAuthenticated: (state) =>  state.user && state.user.role === 'Guru', 
    MuridIsAuthenticated: (state) =>  state.user && state.user.role === 'Murid',
}