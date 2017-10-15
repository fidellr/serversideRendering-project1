export default function ({ store, redirect }) {
  if (store.getters.GuruIsAuthenticated) {
    console.log('Guru is Authenticated')
    return redirect('/guru/' + store.state.user.username + '/profile')
  } else if (store.getters.MuridIsAuthenticated) {
    console.log('Murid is Authenticated')
    return redirect('/murid/' + store.state.user.username + '/profile')
  } else if(!store.getters.GuruIsAuthenticated && !store.getters.MuridIsAuthenticated){
    console.log('no one are authenticate')
  }else{
    redirect('/')
  }
  //   if (store.state.user.role === "Guru") {
  //     return redirect('/teacher/' + store.state.user.username + '/profile')
  //   } else if (store.getters.MuridIsAuthenticated) {
  //     const guruAuth = store.getters.GuruIsAuthenticated = false
  //     const muridAuth = store.getters.MuridIsAuthenticated = false
  //     return {
  //       guruAuth,
  //       muridAuth
  //     }
  //   }
  // } else if (store.getters.MuridIsAuthenticated) {
  //   if (store.state.user.role === "Murid") {
  //     return redirect('/murid/' + store.state.user.username + '/profile')
  //   } else if (store.getters.GuruIsAuthenticated) {
  //     const guruAuth = store.getters.GuruIsAuthenticated = false
  //     const muridAuth = store.getters.MuridIsAuthenticated = false
  //     return {
  //       guruAuth,
  //       muridAuth
  //     }
  //   }
  // }
}
// jika isAuthenticated (getters) true maka akan di redirect ke halaman user (teachers/students)